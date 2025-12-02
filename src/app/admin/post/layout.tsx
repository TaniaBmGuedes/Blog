import MenuAdmin from "../MenuAdmin";

type PostAdminLayoutProps = {
  children: React.ReactNode;
};

export default function PostAdminLayout({
  children,
}: Readonly<PostAdminLayoutProps>) {
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
