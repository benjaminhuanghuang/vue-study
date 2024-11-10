export interface IMenu {
    name: string;
    path?: string;
    icon?: any;
    children?: IMenu[];
  }

  //
  export interface IBanner {
    imageUrl: string;
    [propName: string]: any;
  }


  export interface ISong {
    url: string;
    [propName: string]: any;
  }