import React , {useState} from 'react'
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
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [twitterFollow,setTwitterfollow] = useState(false);
    const [joinTelegram,setJointelegram] = useState(false);
    const [buy,setBuy] = useState(false);
    const [retweet,setRetweet] = useState(false);
    const [tweet,setTweet] = useState(false);
    const [walletAddress,setWalletaddress] = useState(false);
    const [checkFollowOrnot,setCheckfollowornot] = useState('')
    const loggedUserData = useSelector((state) => state.userReducer.user);
    const [provider,setProvider] = useState(null);

    console.log(loggedUserData)

    console.log(twitterFollow,joinTelegram,retweet,tweet,walletAddress)

    const saveTasks = async ()=>{
     const response = await axios.post('/savetasks',
      {
        twitterFollow,
        joinTelegram,
        retweet,
        tweet,
        walletAddress,
      },
      { withCredentials: true })

      console.log('saved tasks')
      console.log(response)
    }

    if(twitterFollow && joinTelegram && retweet && tweet && walletAddress){
      
      saveTasks();
    }

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
    <input onChange={()=>setWalletaddress(true)} placeholder='type wallet address' className='input_wallet_address'/>

    <p className='tasks__points__block'>+ 500</p>

    {walletAddress ?  <DoneIcon className='task__div__icon'/> : <CloseIcon className='task__div__icon'/>}

   

    </div>

    <div className='tasks__div'>
    <h1 className='tasks__div__heading'>2. Follow @ZEPCOIN on twitter</h1>
    <button className='tasks__div__button'><a target="_blank" href='https://twitter.com/zepcoinofficial' className='tasks__div__links' onClick={()=>setTwitterfollow(true)}>follow on twitter</a></button>

    <p className='tasks__points__block'>+ 500</p>

    {twitterFollow ?  <DoneIcon className='task__div__icon'/> : <CloseIcon className='task__div__icon'/>}

    </div>

    <div className='tasks__div'>
    <h1 className='tasks__div__heading'>3. Join @ZEPCOIN on telegram</h1>

    <button className='tasks__div__button'> <a target="_blank" href='https://t.me/zepCoinOfficial' className='tasks__div__links' onClick={()=>setJointelegram(true)}>Join Telegram</a></button>

    <p className='tasks__points__block'>+ 500</p>

    {joinTelegram ?  <DoneIcon className='task__div__icon'/> : <CloseIcon className='task__div__icon'/>}

    </div>

    <div className='tasks__div'>
    <h1 className='tasks__div__heading'>4. Retweet @ZEPCOIN on twitter</h1>

    <button className='tasks__div__button zepcoinButton'><a target="_blank" href='https://twitter.com/zepcoinofficial' className='tasks__div__links' onClick={()=>setRetweet(true)}>retweet on twitter</a></button>

    <p className='tasks__points__block'>+ 500</p>

    {retweet ?  <DoneIcon className='task__div__icon'/> : <CloseIcon className='task__div__icon'/>}

    </div>



    <div className='tasks__div'>
    <h1 className='tasks__div__heading'>5. Tweet @ZEPCOIN on twitter</h1>

    <button className='tasks__div__button'><a target="_blank" href='https://twitter.com/intent/tweet?text=Guyzz I have found this intresting Crypto ICO 
    Its live now. Its $0.0001 $ZEP 🤑🤑 Zep it now.
    
    
    ZIP.....ZAP.....ZOOP🤗🤗🤗
    
    visit- https://zepcoin.io/
    join the community also- https://bit.ly/zepcoin
    #Zepians #newcrypto' className='tasks__div__links' onClick={()=>setTweet(true)}>tweet on twitter</a></button>

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