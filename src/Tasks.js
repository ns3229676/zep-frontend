import React , {useEffect, useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import './Tasks.css'
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from './actions/action';
import axios from './axios';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate ,Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Tasks() {
  
    const navigate = useNavigate();
    const [checkTweet,setChecktweet] = useState('')
    const [checkFollower,setCheckfollower] = useState('')
    const [checkRetweet,setCheckretweet] = useState('')
    const [checkusername,setCheckusername] = useState('')
    const [checkusernameTrueorfalse,setCheckusernameTrueorfalse] = useState(false)
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [twitterFollow,setTwitterfollow] = useState(false);
    const [joinTelegram,setJointelegram] = useState(false);
    const [buy,setBuy] = useState(false);
    const [retweet,setRetweet] = useState(false);
    const [tweet,setTweet] = useState(false);
    const [walletAddress,setWalletaddress] = useState('');
    const [walletAddressstatus,setWalletaddressstatus] = useState('');
    // const [checkFollowOrnot,setCheckfollowornot] = useState('')
    const loggedUserData = useSelector((state) => state.userReducer.user);
    const [provider,setProvider] = useState(null);

    console.log(loggedUserData)

    console.log(twitterFollow,joinTelegram,retweet,tweet,walletAddress)

    

 

    const logoutAdmin = async () => {
    
      setOpen(true);
      try{
  
        const response = await axios.get('/logout', { withCredentials: true });
      
  
      if (response.status === 200) {
        setOpen(false);
        // alert('admin log out seccessfully');
        toast.success('Admin log out successfully', {
          position: 'top-center',
          autoClose: 2000,
        });
        dispatch(removeUser());
        navigate('/');
      }
  
    }catch(err){
      console.log(err)
    }
  
    };

    const tweetData = 'Guyzz I have found this intresting Crypto ICO#ZEPCOIN  Its live now. Its $0.0001 $ZEP 🤑🤑 Zep it now.ZIP.....ZAP.....ZOOP🤗🤗🤗visit- https://zepcoin.io/join the community also- https://bit.ly/zepcoin#Zepians #newcrypto'

   
      
      
    const saveretweetstatus = async ()=>{
      try{
        await axios.post('/saveretweettaskstatus',{
          retweet : true,
          loggedUserData : loggedUserData
        },{withCredentials : true});
      }catch(err){
        console.log(err)
      }
    }
    
    const FetchTasks = async ()=>{

      const adminloginorlogoutStatus = await axios.get('/adminloginorlogout',{withCredentials: true})
      console.log('adminloginorlogoutstatus')
      console.log(adminloginorlogoutStatus)
      dispatch(addUser(adminloginorlogoutStatus.data));


      const followTaskresponse = await axios.post('/fetchfollowtaskresponse',{
        loggedUserData : adminloginorlogoutStatus.data
      },{withCredentials: true})

      const retweetTaskresponse = await axios.post('/fetchretweetTaskresponse',{
        loggedUserData : adminloginorlogoutStatus.data
      },{withCredentials: true})

      const walletAddresstaskresponse = await axios.post('/fetchwalletAddressresponse',{
        loggedUserData : adminloginorlogoutStatus.data
      },{withCredentials: true})

      const tweettaskresponse = await axios.post('/fetchtweettaskresponse',{
        loggedUserData : adminloginorlogoutStatus.data
      },{withCredentials: true})


      setTwitterfollow(followTaskresponse?.data?.twitterFollow)
      setCheckusernameTrueorfalse(retweetTaskresponse?.data?.retweet)
      setTweet(tweettaskresponse?.data?.tweet)

      if (walletAddresstaskresponse?.data === null){

        setWalletaddressstatus(false)
      }else{
        setWalletaddressstatus(true)

      }


      console.log('response from fetchfollowtaskresponse')
      console.log(followTaskresponse?.data?.twitterFollow)

      console.log('response from fetchretweetTaskresponse')
      console.log(retweetTaskresponse)

      console.log('response from walletAddresstaskresponse')
      console.log(walletAddresstaskresponse)

      console.log('response from tweettaskresponse')
      console.log(tweettaskresponse)
      
    }

    useEffect(()=>{
      FetchTasks();
    },[])

    const savetweettaskstatus = async ()=>{

    const response =   await axios.post('/savetweettaskstatus',{
        tweet : true,
        loggedUserData : loggedUserData
      },{withCredentials : true})
      
      console.log(response)
    }


  
  

  return (

    <div>
    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}
  >
    <CircularProgress color="inherit" />
  </Backdrop>

    <div >
    <h1 className='tasks__firstHeading'>CLAIM YOUR YOUR FREE 5k AIRDROP</h1>
    {loggedUserData ? [provider === null ? [<button onClick={logoutAdmin} className="logout__button__forResponsive">LogOut Admin</button>] : null] : null}
    </div>

    <div className='tasks'>

    
    
    <div className='tasks__details'>

    <div className='tasks__div'>
    <h1 className='tasks__div__heading'>1. Enter your wallet Address</h1>
    <input value={walletAddress} onChange={(e)=>setWalletaddress(e.target.value)} placeholder='type wallet address' className='input_wallet_address'/>

    <p className='tasks__points__block'>+ 500</p>

    <button onClick={async ()=>{
      const response = await axios.post('/savewallettaskstatus',{
        walletAddress : walletAddress,
        loggedUserData : loggedUserData
      },{withCredentials : true})

      if(response){
        setWalletaddressstatus(true)
      }else{
        setWalletaddressstatus(false)
      }

    }}>Continue</button>

    {walletAddressstatus ?  <DoneIcon className='task__div__icon'/> : <CloseIcon className='task__div__icon'/>}

   

    </div>

    <div className='tasks__div'>
    <h1 className='tasks__div__heading'>2. Follow @ZEPCOIN on twitter</h1>
    <button className='tasks__div__button'><a target="_blank" href='https://twitter.com/zepcoinofficial' className='tasks__div__links' >Click to Follow</a></button>


    <input className='tasks__div__checkFollower' placeholder='Enter twitter user id' value={checkFollower} onChange={(event)=> setCheckfollower(event.target.value)}/>
    <button className='tasks__div__checkFollower__button' onClick={async ()=>{
      try{
        const response = await axios.post('/checkfollower',
        {
          checkFollower : checkFollower
        },
        { withCredentials: true }
       )
       console.log('response from check follower')
       console.log(response.data.relationship.source.followed_by)
      setTwitterfollow(response.data.relationship.source.followed_by)
  
      if(response){
        await axios.post('/savefollowtaskstatus',{
          twitterFollow : response.data.relationship.source.followed_by,
          loggedUserData : loggedUserData
        },{withCredentials : true});

        console.log('response.data.relationship.source.followed_by')
        console.log(response.data.relationship.source.followed_by)
      }
      }catch(error){
        console.log(error)
      }
    
    }}>Continue</button>

    <p className='tasks__points__block'>+ 500</p>

    {twitterFollow ?  <DoneIcon className='task__div__icon'/> : <CloseIcon className='task__div__icon'/>}

    </div>

    <div className='tasks__div'>
    <h1 className='tasks__div__heading'>3. Join @ZEPCOIN on telegram</h1>

    <button className='tasks__div__button'> <a target="_blank" href='https://t.me/zepCoinOfficial' className='tasks__div__links' onClick={()=>setJointelegram(true)}>Click to Join</a></button>

    <p className='tasks__points__block'>+ 500</p>

    {joinTelegram ?  <DoneIcon className='task__div__icon'/> : <CloseIcon className='task__div__icon'/>}

    </div>

    <div className='tasks__div'>
    <h1 className='tasks__div__heading'>4. Retweet @ZEPCOIN on twitter</h1>

    <button className='tasks__div__button zepcoinButton'><a target="_blank" href='https://twitter.com/zepcoinofficial' className='tasks__div__links' onClick={()=>setRetweet(true)}>Click to Retweet</a></button>

    <p className='tasks__points__block'>+ 500</p>

    <input className='tasks__div__checkRetweet' placeholder='enter retweet page id' value={checkRetweet} onChange={(event)=>{ setCheckretweet(event.target.value)}}/>

    <input placeholder='enter twitter user name to check retweet' value={checkusername} onChange={(event)=> setCheckusername(event.target.value)}/>

    <button onClick={async ()=>{
     
      try{

        const response = await axios.post('/checkretweeted',
          {
            checkRetweet : checkRetweet
          },
          { withCredentials: true }
        )
  
        console.log('response from checkretweeted')
        console.log(response)

        response?.data?.data?.map((data)=>{
          console.log(data.username)
  
          if(data.username === checkusername){
            setCheckusernameTrueorfalse(true)
             console.log('checkusernameTrueorfalse response form the server')
             console.log(checkusernameTrueorfalse)
            //  if(checkusernameTrueorfalse){

              saveretweetstatus();
              return
            //  }
            
             }
             
          })

      }catch(error){
        console.log(error)
      }
  
        
      


    }}>Continue</button>

    {checkusernameTrueorfalse ?  <DoneIcon className='task__div__icon'/> : <CloseIcon className='task__div__icon'/>}

    </div>



    <div className='tasks__div'>
    <h1 className='tasks__div__heading tweet__on__twitter'>5. Tweet @ZEPCOIN on twitter</h1>

    <button className='tasks__div__button'><a target="_blank" href='https://twitter.com/intent/tweet?text=Guyzz I have found this intresting Crypto ICO 
    Its live now. Its $0.0001 $ZEP 🤑🤑 Zep it now.
    
    
    ZIP.....ZAP.....ZOOP🤗🤗🤗
    
    visit- https://zepcoin.io/
    join the community also- https://bit.ly/zepcoin
    #Zepians #newcrypto' className='tasks__div__links' onClick={()=>setTweet(true)}>Click For Tweet</a></button>

    <input className='tasks__div__checkTweet' placeholder='Enter tweet Id' value={checkTweet} onChange={(event)=> setChecktweet(event.target.value)} />

    <button className='tasks__div__checkTweet__button' onClick={async ()=>{
      const response = await axios.post('/checktweet',
        {
          tweetId : checkTweet
        },
        { withCredentials: true }
      )

      console.log('response from tweet id')
    
      console.log(response.data)


      if(response.data){
        setTweet(response.data)

        savetweettaskstatus()
      }else{
        console.log('not followed')
      }

    }}>Continue</button>

    <p className='tasks__points__block'>+ 500</p>

    {tweet ?  <DoneIcon className='task__div__icon'/> : <CloseIcon className='task__div__icon'/>}

    </div>

    <div className='tasks__div'>
    <h1 className='tasks__div__heading buy'>6. Buy ICO-ZEPCOIN</h1>

    <button className='tasks__div__button'><a target="_blank" href='https://twitter.com/zepcoinofficial' className='tasks__div__links' onClick={()=>setBuy(true)}>BUY NOW</a></button>

    <p className='tasks__points__block'>+ 500</p>

    {buy ?  <DoneIcon className='task__div__icon'/> : <CloseIcon className='task__div__icon'/>}

    </div>
   


    </div>

    

    </div>


   
   

    </div>
  )
}

export default Tasks