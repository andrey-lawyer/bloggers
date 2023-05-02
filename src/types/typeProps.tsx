export interface IUserProps {
  name: string;
  userImg: string;
  uid: string;
}

interface IPosts {
  item: {
    idPost: string;
    info: string;
    theme: string;
    title: string;
    timestamp: number;
    visible: boolean;
  };
}

export interface IPersonalPostUserProps extends IPosts {
  data: string;
}

export interface IPostUserProps extends IPosts {
  onClickVisible: (idPost: string, visible: boolean) => Promise<void>;
  onDeletePost: (idPost: string) => void;
}

export interface IPropsNavLink {
  href: string;
  exact: boolean;
  className: string;
}

export interface ILayout {
  title: string;
}
