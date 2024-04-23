import { TitleService } from './../../services/title.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Cls } from 'src/app/Model/cls';
import { AuthserviceService } from 'src/app/services/auth/authservice.service';
import { BasicService } from 'src/app/services/basic.service';
import { StudentList } from '../studentlist.modal';
import { Setting } from 'src/app/Model/setting';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {
  _class: number;
  _section: any = 'all';
  sections: Cls[] = [];
  datas: any[] = [];
  state = 0;
  _date: number;
  students: StudentList[] = [];
  url = Setting.url + "uploads/images/student/";
  constructor(private connection: ElectronService, public basic: BasicService, public auth: AuthserviceService, public client: ApiService, private title: TitleService) {
    if (this.basic.loaded) {
      this._class = this.basic.classes[0].id;
      this.change();
    } else {
      this.basic.onLoaded.subscribe((res) => {
        this._class = this.basic.classes[0].id;
        this.change();
      });
    }
    this._date = Date.now();
    this.title.title = "Student List";
  }

  ngOnInit(): void {

  }
  change() {

    this.basic.classes.forEach(cls => {
      if (cls.id == this._class) {
        this.sections = cls.sections;

      }
    });
    this._section = 'all';
    console.log(this._class, this.sections);
  }

  load() {
    this.state = 1;
    this.client.post('student/list', {
      class_id: this._class,
      section_id: this._section,
      branch_id: this.auth.user.branch_id
    })
      .subscribe((res: StudentList[]) => {
        console.log(res, "student list");
        this.students = res;
        this.state = 2;
      }, (err) => {
        this.state = 0;
      })
  }

  age(student: StudentList): number {
    if (student.birthday) {
      const convertAge = new Date(student.birthday);
      const timeDiff = Math.abs(this._date - convertAge.getTime());
      return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);
    }
  }
}
