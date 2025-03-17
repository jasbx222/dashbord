import Image from "next/image";
import './Header.css'
import img_header from "../../../public/img/Business Plan.gif"
import NavHeader from "./NavHeader";
const Header = () => {
  return (
 <div>
  <NavHeader/>
     <div  className="header">
 
 <div className="img">
<Image
className="img"
src={img_header}
width={250}
height={250}
alt="header img"
>

</Image>
 </div>
 <div className="text">

<h3>صفحة التحكم الخاصة بلادمن </h3>

</div>
</div>
 </div>
  )
}

export default Header