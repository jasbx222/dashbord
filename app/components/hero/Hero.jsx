import { Notebook,  NotebookTabsIcon, Phone, User, UserRoundX } from 'lucide-react'
import './Hero.css'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="col">
            <div className="icon">
            <Phone color='#fff' />
            </div>
            <div className="hero-text">
              <span>   اجمالي الاتصالات</span>
            </div>
            <div className="number">
                <span>10</span>
            </div>
        </div>




        <div className="col">
        <div className="icon">
        <UserRoundX color='#fff'/>
        </div>
            <div className="hero-text">
               <span>  الحرفين منتهي الصلاحية</span>
            </div>
            <div className="number">
                <span>12</span>
            </div>
        </div>




        <div className="col">
        <div className="icon">
        <User color='#fff' />
        </div>
            <div className="hero-text">
                <span>الحرفين الفعال</span>
            </div>
            <div className="number">
                <span>78</span>
            </div>
        </div>



        <div className="col">
        <div className="icon">
            <Notebook color='#fff'/>
        </div>
            <div className="hero-text">
                <span>اجمالي الطلبات</span>
            </div>
            <div className="number">
                <span>123</span>
            </div>
        </div>



        <div className="col">
        <div className="icon">
            <NotebookTabsIcon color='#fff'/>
        </div>
            <div className="hero-text">
                <span>
                    عدد الطلبات
                </span>
            </div>
            <div className="number">
                <span>123</span>
            </div>
        </div>
    </div>
  )
}
