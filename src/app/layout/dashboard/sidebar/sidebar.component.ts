import { MenuItemModel } from './menuitemmodal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  menus: MenuItemModel[] = [
    {
      icon: "home-sharp",
      path: "#",
      title: "Home",
    },
    {
      icon: "person-circle-sharp",
      path: "#",
      title: "Profile",
    },
    {
      icon: "person",
      path: "/student",
      title: "Students",
      children: [
        {
          icon: "person",
          path: "/student",
          title: "list",
        }
      ]
    },
    {
      icon: "people-sharp",
      path: "/parent",
      title: "Parents",
      children: [
        {
          icon: "person",
          path: "/parent",
          title: "list",
        }
      ]
    },
    {
      icon: "people",
      path: "/employee",
      title: "Employees",
      children: [
        {
          icon: "person",
          path: "/employee",
          title: "list",
        }
      ]
    },
    {
      icon: "list",
      path: "/fee/invoice_list",
      title: "Student Accounting",
      children: [
        {
          icon: "person",
          path: "/fee/invoice_list",
          title: "Fees Pay / Invoice",
        },
        {
          icon: "person",
          path: "/fee/due_list",
          title: "Due Fees Invoice",
        }
      ]
    },
    {
      icon: "library",
      path: "/library/book_list",
      title: "Library",
      children: [
        {
          icon: "person",
          path: "/library/book_list",
          title: "Books",
        },
        {
          icon: "person",
          path: "/library/book_category",
          title: "Books Category",
        },
        {
          icon: "person",
          path: "/inventory/stock_history",
          title: "My Issued Book",
        },
        {
          icon: "person",
          path: "/inventory/stock_history",
          title: "Book Issue/Return",
        }
      ]
    },
    {
      icon: "cash-sharp",
      path: "/accounting",
      title: "Office Accounting",
      children: [
        {
          icon: "person",
          path: "/accounting",
          title: "Account List",
        },
        {
          icon: "person",
          path: "/accounting/deposite_list",
          title: "Deposit List",
        },
        {
          icon: "person",
          path: "/accounting/expense_list",
          title: "Expense List",
        },
        {
          icon: "person",
          path: "/accounting/all_transaction",
          title: "All Transaction",
        }
      ]
    },
    {
      icon: "storefront",
      path: "/inventory/vendor_list",
      title: "Inventory",
      children: [
        {
          icon: "person",
          path: "/inventory/vendor_list",
          title: "Vendor List",
        },
        {
          icon: "person",
          path: "/inventory/stock_history",
          title: "Stock History",
        }
      ]
    },
    {
      icon: "book",
      path: "/inventory/vendor_list",
      title: "Report",
      children: [
        {
          icon: "person",
          path: "/inventory/vendor_list",
          title: "Fees Report",
        },
        {
          icon: "person",
          path: "/inventory/stock_history",
          title: "Attendance Report",
        }
      ]
    },
    {
      icon: "settings",
      path: "/inventory/vendor_list",
      title: "Settings",
      children: [
        {
          icon: "person",
          path: "/inventory/vendor_list",
          title: "School Settings",
        },
        {
          icon: "person",
          path: "/inventory/stock_history",
          title: "Translation",
        },
        {
          icon: "person",
          path: "/inventory/stock_history",
          title: "Corn Job",
        },
        {
          icon: "person",
          path: "/inventory/stock_history",
          title: "Custom Field",
        }
      ]
    },
    {
      icon: "power-sharp",
      path: "logout",
      title: "Logout",
    }
  ];
  ngOnInit(): void {
  }

}
