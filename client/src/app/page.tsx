import Image from "next/image";
import logo from '../../public/logotypes/Game Logo/ID Block/CALIBER_IdBlock_Horizontal_WhiteR_Ru.png'
import Link from "next/link";
import Button from "@/packages/ui/src/shared/Button/Button.component";

export default function Home() {
  return (
    <>
      <div>Тут главная</div>
      <div >
      {/* <video style={ {}}autoPlay loop playsInline muted poster="https://caliber-website.s-ed1.cloud.gcore.lu/media/main/2024/02/BG_Desktop_site_1_zBCxRzj.jpg">
        <source src="https://s-ed1.cloud.gcore.lu/caliber-website/media/CST_Trailer_for_site_FULLHD.mp4" type="video/mp4" />
      </video> */}
      </div>
      <div id="main_block_1_2">
        <div>  
          Командная Тактическая Игра
        </div>


        
        <div>
          {/* <Image src={logo} alt="Калибр" title="Калибр" /> */}
        </div>
        <div>
         <Button url="/account/registration/"/>
        </div>
      </div>
    </>
  );
}
