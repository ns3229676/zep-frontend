import React , {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import './Tasks.css'

function Tasks() {

    const [twitterFollow,setTwitterfollow] = useState(false);
    const [joinTelegram,setJointelegram] = useState(false);
    const [retweet,setRetweet] = useState(false);
    const [tweet,setTweet] = useState(false);
    const [checkFollowOrnot,setCheckfollowornot] = useState('')

  return (

    <div>

    <div >
    <h1 className='tasks__firstHeading'>CLAIMYOUR FREE AIRDROP</h1>
    </div>

    <div className='tasks'>

    
    
    <div className='tasks__details'>

    <div className='tasks__div'>
    <h1 className='tasks__div__heading'>Follow @ZEPCOIN on twitter</h1>
    <button className='tasks__div__button'><a target="_blank" href='https://twitter.com/zepcoinofficial' className='tasks__div__links' onClick={()=>setTwitterfollow(true)}>follow on twitter</a></button>

    <p className='tasks__points__block'>+ 500</p>

    {twitterFollow ?  <DoneIcon className='task__div__icon'/> : <CloseIcon className='task__div__icon'/>}

    </div>

    <div className='tasks__div'>
    <h1 className='tasks__div__heading'>Join @ZEPCOIN on telegram</h1>

    <button className='tasks__div__button'> <a target="_blank" href='https://t.me/zepCoinOfficial' className='tasks__div__links' onClick={()=>setJointelegram(true)}>Join Telegram</a></button>

    <p className='tasks__points__block'>+ 500</p>

    {joinTelegram ?  <DoneIcon className='task__div__icon'/> : <CloseIcon className='task__div__icon'/>}

    </div>

    <div className='tasks__div'>
    <h1 className='tasks__div__heading'>Retweet @ZEPCOIN on twitter</h1>

    <button className='tasks__div__button zepcoinButton'><a target="_blank" href='https://twitter.com/zepcoinofficial' className='tasks__div__links' onClick={()=>setRetweet(true)}>retweet on twitter</a></button>

    <p className='tasks__points__block'>+ 500</p>

    {retweet ?  <DoneIcon className='task__div__icon'/> : <CloseIcon className='task__div__icon'/>}

    </div>



    <div className='tasks__div'>
    <h1 className='tasks__div__heading'>Tweet @ZEPCOIN on twitter</h1>

    <button className='tasks__div__button'><a target="_blank" href='https://twitter.com/zepcoinofficial' className='tasks__div__links' onClick={()=>setTweet(true)}>tweet on twitter</a></button>

    <p className='tasks__points__block'>+ 500</p>

    {tweet ?  <DoneIcon className='task__div__icon'/> : <CloseIcon className='task__div__icon'/>}

    </div>
   


    </div>

    

    </div>


   
   

    </div>
  )
}

export default Tasks