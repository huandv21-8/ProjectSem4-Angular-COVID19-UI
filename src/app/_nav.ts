import {INavData} from '@coreui/angular';

export const navItems: INavData[] = [

  {
    name: 'Thống kê',
    url: 'dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Quản lý bệnh nhân'
  },
  {
    name: 'Thông tin',
    // url: 'people-management',
    icon: 'icon-folder-alt',
    children: [
      {
        name: 'Thêm thông tin',
        url: 'people-management/createPeople',
        icon: 'icon-note'
      },
      {
        name: 'Danh sách',
        url: 'people-management/listPeople',
        icon: 'icon-list',
        children: [
          {
            name: 'Bệnh nhân',
            url: 'people-management/listPeople/a/sick',
            icon: 'icon-list'
          },
          {
            name: 'F1',
            url: 'people-management/listPeople/b/f1',
            icon: 'icon-list'
          },
          {
            name: 'Khỏi bệnh',
            url: 'people-management/listPeople/c/cured',
            icon: 'icon-list'
          },
          {
            name: 'Đã chết',
            url: 'people-management/listPeople/d/died',
            icon: 'icon-list'
          }
        ]
      }
    ]
  },
  {
    title: true,
    name: 'Quản lý thông tin tình hình dịch bệnh'
  },

  {
    name: 'Diễn biến dịch',
    icon: 'icon-folder-alt',
    children: [
      {
        name: 'Tạo diễn biến dịch',
        url: 'post/situation',
        icon: 'icon-note'
      },

    ]
  },
  {
    title: true,
    name: 'Quản lý khai báo ý tế'
  },
  {
    name: 'Danh sách khai báo',
    icon: 'icon-folder-alt',
    children: [
      {
        name: 'Danh sách tài account',
        url: 'declare',
        icon: 'icon-list'
      },
      // {
      //   name: 'Danh dách tờ khai',
      //   url: 'declare/list',
      //   icon: 'icon-list'
      // }
    ]
  },


];
