import React,{useState,useEffect} from "react";
import "./ServerInfo.css";
import back from '../Assets/back.png';
import americaflag from '../Assets/americaflag.svg';
import star from '../Assets/star.png';
import blackstar from '../Assets/blackstar.png';
import menu2 from '../Assets/menu2.png';
import menu3 from '../Assets/menu3.png';
import menu4 from '../Assets/menu4.png';
import menu5 from '../Assets/menu5.png';
import online from '../Assets/online.png';
import offline from '../Assets/offline.png';
import squad from '../Assets/squad.png';
import plus from '../Assets/plus.png';

const ServerInfo = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [data,setdata]=useState([]);
    const [loading, setLoading] = useState(true);
    const detailsfetch=async()=>{
      setLoading(true);
    
      try{
          const response = await fetch(`${process.env.REACT_APP_BASE_URL}api/server-info/!RC3-BASEMAPS`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          });
          const newdata = await response.json();
          console.log(newdata);
         if(response.status===200){
          setdata(newdata);
         }else{
          console.log("error");
         }
      
        } catch(error){
          console.error('Error fetching users:', error);
        
         } finally {
            setLoading(false);
          }
       
    };
   
    useEffect(() => {
     
    detailsfetch();
 
    },[])
    if(!loading){
  return (
    <div className="server-info">
        <div className="sidemenu">
              <div className="side1">
           <div  className="sideimg1"></div>
           <div className="sideimg2"></div>
           <div  className="sideimg3"></div>
           <div  className="sideimg4"></div>
           <div  className="sideimg5"></div>
           <div  className="sideimg6"></div>
           <div  className="sideimg7"></div>
           <div>

           </div>
              </div>
        </div>
        <div className="center-line"></div> 
        <div className="serverbody">
        <div className="serverheader">
        <div className="headingupper">
           <div style={{alignItems:'center'}}>
        <img src={back} style={{height:'12px'}}></img>
        </div>
        <div>
        MULTIPLAYER
        </div>
        <div>
        /
        </div>
        <div>
        SERVER BROWSER
        </div>
        <div>
        /
        </div>
        </div>
        <div className="headinglower">
        SERVER INFO
        </div>
      </div>

      <div className="server-details">
        <div className="server-name">
          <div className="servername1">! RC3-BASEMAPS</div>
          <div  className="servername2">
            <img src={americaflag} style={{height:'85%',marginRight:'0.5%'}} ></img>
            <p>
            CONQUEST LARGE - LANCANG DAM - CUSTOM - 60 HZ
            </p>
          </div>

          <div  className="servername3">
            Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
            Request, Appeal, Visit us:  {" "}www.epg.gg
            | Discord             https://discord.gg/3r5Nk4d
          
          </div>
        </div>

        <div className="actions">
          <button className="actions1">JOIN</button>
          <button className="actions1">SPECTATE</button>
          <button className="actions1">JOIN AS COMMANDER</button>
          <button
      className="actions2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? blackstar : star}
        alt="Star"
        style={{ height: "11px",marginRight:'3px'}}
      />
      13672
    </button>
        </div>

        <div className="info-grid">
          <div>
            <strong>PLAYERS</strong>
            <p>{data.players}/{data.maxPlayers}</p>
          </div>
          <div>
            <strong>PING</strong>
            <p>{data.ping}ms</p>
          </div>
          <div>
            <strong>TICKRATE</strong>
            <p>{data.tickrate} Hz</p>
          </div>
        </div>

      <div className="info">
       <div className="settings">
          <div className="infoheading">SETTINGS</div>
         <div className="s1">
         <p>REGION </p>
         <p>{data.settings.region}</p>
         </div>
         <div className="s1">
         <p>PUNKBUSTER</p>
            <p>{data.settings.punkbuster===true?'ON':'OFF'}</p>
         </div>
         <div className="s1">
         <p>FAIRFIGHT</p>
         <p>{data.settings.fairfight===true?'ON':'OFF'}</p>
         </div>
         <div className="s1">
         <p>PASSWORD</p>
         <p>{data.settings.password===true?'ON':'OFF'}</p>
         </div>
         <div className="s1">
         <p>PRESET</p>
         <p>{data.settings.preset}</p>
         </div>
           
           
           
           
          
          
          </div>

       <div className="advanced">
          <div  className="infoheading">ADVANCED</div>
         
          <div className="a1">
         <p>MINIMAP </p>
            <p>{data.advanced.minimap===true?'ON':'OFF'}</p>
         </div>
         <div className="a1">
         <p>ONLY SQUAD LEADER SPAWN</p>
            <p>{data.advanced.onlysquad===true?'ON':'OFF'}</p>
         </div>
         <div className="a1">
         <p>VEHICLES</p>
            <p>{data.advanced.vehicles===true?'ON':'OFF'}</p>
         </div>
         <div className="a1">
         <p>TEAM BALANCE</p>
            <p>{data.advanced.teambalance===true?'ON':'OFF'}</p>
         </div>
         <div className="a1">
         <p>MINIMAP SPOTTNG </p>
            <p>{data.advanced.minimapspotting===true?'ON':'OFF'}</p>
         </div>
         <div className="a1">
         <p>HUD </p>
            <p>{data.advanced.hud===true?'ON':'OFF'}</p>
         </div>
         <div className="a1">
         <p>3P VEHCILE CAM </p>
            <p>{data.advanced.vehiclecam===true?'ON':'OFF'}</p>
         </div>
         <div className="a1">
         <p>REGENERATIVE HEALTH</p>
            <p>{data.advanced.regenerativehealth===true?'ON':'OFF'}</p>
         </div>
         <div className="a1">
         <p>KILL CAM </p>
            <p>{data.advanced.killcam===true?'ON':'OFF'}</p>
         </div>
         <div className="a1">
         <p>FRIENDLY FIRE </p>
            <p>{data.advanced.friendlyfire===true?'ON':'OFF'}</p>
         </div>
         <div className="a1">
         <p>3D SPOTTING </p>
            <p>{data.advanced.spotting===true?'ON':'OFF'}</p>
         </div>
         <div className="a1">
         <p>ENEMY NAME TAGS</p>
            <p>{data.advanced.enemynametags===true?'ON':'OFF'}</p>
         </div>
            </div>
            <div className="rules">
                <div  className="infoheading">RULES</div>
                <div className="r1">
         <p>TICKETS</p>
            <p>{data.rules.tickets}</p>
         </div>
         <div className="r1">
         <p>VEHICLE SPAWN DELAY</p>
            <p>{data.rules.vehiclespawndelay}</p>
         </div>
         <div className="r1">
         <p>BULLET DAMAGE</p>
            <p>{data.rules.bulletdamage}</p>
         </div>
         <div className="r1">
         <p>KICK AFTER TEAM KILLS</p>
            <p>{data.rules.kickafterteamkills}</p>
         </div>
         <div className="r1">
         <p>PLAYER HEALTH</p>
            <p>{data.rules.playerhealth}</p>
         </div>
         <div className="r1">
         <p>PLAYER RESPAWN TIME</p>
            <p>{data.rules.playerrespawntime}</p>
         </div>
         <div className="r1">
         <p>KICK AFTER IDLE</p>
            <p>{data.rules.kickafteridle}</p>
         </div>
         <div className="r1">
         <p>BAN AFTER KICKS</p>
            <p>{data.rules.banafterkicks}</p>
         </div>
           
            </div>
         
        
      </div>
      <div className="map">
        <p>MAP ROTATION</p>
        <div className="row">
        <div className="col">
        <div className="col1"></div>
            <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>DWANBREAKER</p>
                </div>
        </div>
        <div className="col">
        <div className="col2"></div>
        <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>PROPAGANDA</p>
                </div>
        </div>
        <div className="col">
        <div className="col3"></div>
        <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>OPERATION LOCKER</p>
                </div>
        </div>
        <div className="col">
        <div className="col4"></div>
        <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>LANCANG DAM</p>
                </div>
        </div>
        </div>
        <div className="row">
        <div className="col">
        <div className="col5"></div>
        <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>SEIGE OF SHANGHAI</p>
                </div>
        </div>
        <div className="col">
        <div className="col6"></div>
        <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>GOLMUD RAILWAY</p>
                </div>
        </div>
        <div className="col">
        <div className="col2"></div>
        <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>PROPAGANDA</p>
                </div>
        </div>
        <div className="col">
        <div className="col5"></div>
        <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>SEIGE OF SHANGHAI</p>
                </div>
        </div>
        </div>
        <div className="row">
        <div className="col">
        <div className="col1"></div>
        <div className="column2">
                <p>CONQUEST LARGE</p>
                <p>DWANBREAKER</p>
               
                </div>
        </div>
        <div className="col">
        <div className="col2"></div>
        <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>PROPAGANDA</p>
                </div>
        </div>
        <div className="col">
        <div className="col3"></div>
        <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>OPERATION LOCKER</p>
                </div>
        </div>
        <div className="col">
        <div className="col4"></div>
        <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>LANCANG DAM</p>
                </div>
        </div>
        </div>
        <div className="row">
        <div className="col">
            <div className="col5"></div>
            <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>SEIGE OF SHANGHAI</p>
                </div>
        </div>
        <div className="col">
        <div className="col6"></div>
        <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>GOLMUD RAILWAY</p>
                </div>
        </div>
        <div className="col">
        <div className="col2"></div>
        <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>PROPAGANDA</p>
                </div>
        </div>
        <div className="col">
        <div className="col5"></div>
        <div className="column2">
                <p>CONQUEST LARGE </p>
                <p>SEIGE OF SHANGHAI</p>
                </div>
        </div>
        </div>
      </div>
      </div>
        </div>
        <div className="rightmenu">
        <div className="menu">
      <div className="title">
       <div className="title1">
        <div>
         <img src={squad} style={{height:'10px',width:'10px'}}></img>
         </div>
         <div>
         <img src={menu2} style={{height:'30px',width:'30px'}}></img>
         </div>
       </div>
       <div className="title1">
        <div>
         <img src={online} style={{height:'10px',width:'10px'}}></img>
         </div>
         <div>
         <img src={menu3} style={{height:'30px',width:'30px'}}></img>
         </div>
       </div>
       <div className="title1">
        <div>
         <img src={offline} style={{height:'10px',width:'10px'}}></img>
         </div>
         <div>
         <img src={menu4} style={{height:'30px',width:'30px'}}></img>
         </div>
       </div>
      </div>
      <div className="nav">
      <div className="title2">
        <div className="title3" >
         <img   src={squad} style={{height:'10px',width:'10px'}}></img>
        <p>SQUAD</p> 
         </div>
         <div className="title4" onMouseEnter={() => setIsHovered1(true)}
      onMouseLeave={() => setIsHovered1(false)}>
         <img src={isHovered1 ? plus : menu2}  style={{height:'30px',width:'30px',padding:'0px'}}></img>
      <div style={{alignItems:'center'}}> <p>Squad Join</p> </div>
         </div>
       </div>
       <div className="title2">
        <div className="title3">
         <img src={online} style={{height:'10px',width:'10px'}}></img>
         <div>
         <p>ONLINE</p>
         </div>
        
         </div>
         <div className="title4">
         <img src={menu3} style={{height:'30px',width:'30px'}}></img>
         <div className="title5">
         <p>Mary Jane</p>
         <p style={{color:'grey'}}>Online</p>
         </div>
         </div>
       </div>
       <div className="title2">
        <div className="title3">
         <img src={offline} style={{height:'10px',width:'10px'}}></img>
         <p> OFFLINE</p>
         </div>
         <div className="title4"  onMouseEnter={() => setIsHovered2(true)}
      onMouseLeave={() => setIsHovered2(false)}>
         <img src={isHovered2 ? menu5 : menu4}  style={{height:'30px',width:'30px'}}></img>
         <div className="title5">
         <p style={{color:'grey'}}>420</p>
         <p style={{color:'grey'}}>Offline</p>
         </div>
         </div>
       </div>
      </div>
    </div>
        </div>
      
    </div>
  );
}
};

export default ServerInfo;
