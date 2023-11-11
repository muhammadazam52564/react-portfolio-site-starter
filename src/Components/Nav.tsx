import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const Nav = (props: { horizontal: boolean, style: object }) => {
    const mode = props.horizontal ? "horizontal" : "vertical"
    const style = props.style
    const menuItems = [
        {
          label: <Link to="/"> Home </Link>,
          key: "home"
        },
        {
          label: <Link to="/company"> Company </Link>,
          key: "Company"
        },
        {
          label: <Link to="/services"> Services </Link>,
          key: "Services"
        },
        {
          label: <Link to="/products"> Products </Link>,
          key: "Products"
        },
        {
          label: <Link to="/contact"> Contact </Link>,
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