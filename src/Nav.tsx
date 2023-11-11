import { Menu } from 'antd';
const Nav = (props: { horizontal: boolean, style: object }) => {
    const mode = props.horizontal ? "horizontal" : "vertical"
    const style = props.style
    const menuItems = [
        {
          label: "Home",
          key: "home"
        },
        {
          label: "Company",
          key: "Company"
        },
        {
          label: "Services",
          key: "Services"
        },
        {
          label: "About",
          key: "About"
        },
        {
          label: "Contact",
          key: "Contact"
        }
      ]
  return (
    <>
        <Menu  mode={mode} items={menuItems} style={style} />
    </>
  )
}
export default Nav