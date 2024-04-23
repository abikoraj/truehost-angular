export interface MenuItemModel {
  path: string;
  icon: string;
  title: string
  children?: MenuItemModel[];
}
