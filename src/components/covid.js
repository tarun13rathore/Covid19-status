import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const Covid = () =>{

    const [data,setData] = useState([]); 
    const getCovidData = async () =>{
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const accdata = await res.json();
            console.log(accdata.statewise[0]);
            setData(accdata.statewise[0]);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
       getCovidData();
    },[]);

    return (
        <>
       
        <div className="container-fluid mb-5">
    <div className="text-center mt-5">
        <h1> 😓 Covid-19 Updated Data 2021 Based On Daily Recorded 🇮🇳 </h1>
    </div>
    <div className="row text">
        <div className="col-md-4">
            <div className="box">
                <div className="our-services settings">
                    <div className="icon"></div>
                    <h4><span>Our</span> Country</h4>
                    <p>INDIA</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services speedup">
                    <div className="icon">  </div>
                    <h4><span>Total</span> Recovered</h4>
                    <p>{data.recovered}</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services privacy">
                    <div className="icon">  </div>
                    <h4><span>Total</span> Conformed</h4>
                    <p>{data.confirmed} </p>
                </div>
            </div>
        </div>
    </div>
    <div className="row text">
        <div className="col-md-4">
            <div className="box">
                <div className="our-services backups">
                    <div className="icon">  </div>
                    <h4><span>Total</span> Death</h4>
                    <p>{data.deaths}</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services ssl">
                    <div className="icon">  </div>
                    <h4><span>Total</span> Active</h4>
                    <p>{data.active}</p>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="box">
                <div className="our-services database">
                    <div className="icon">  </div>
                    <h4><span>Last</span> Update</h4>
                    <p>{data.lastupdatedtime}</p>
                </div>
            </div>
        </div>
    </div>
</div>
        
        </>
      );
}


export default Covid;
