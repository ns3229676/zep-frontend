import React , {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';

function Tasks() {

    const [twitterFollow,setTwitterfollow] = useState(false);
    const [joinTelegram,setJointelegram] = useState(false);
    const [retweet,setRetweet] = useState(false);
    const [checkFollowOrnot,setCheckfollowornot] = useState('')

  return (

    <div>

    <div className='tasks'>
    
    <div className='tasks__details'>

    <div className='tasks__div'>
    <h1>Follow @ZEPCOIN on twitter</h1>

    <a target="_blank" href='https://twitter.com/zepcoinofficial' onClick={()=>setTwitterfollow(true)}>follow on twitter</a>

    {twitterFollow ?  <DoneIcon/> : <CloseIcon/>}

    </div>

    <div className='tasks__div'>
    <h1>Join @ZEPCOIN on telegram</h1>

    <a target="_blank" href='https://web.telegram.org/z/' onClick={()=>setJointelegram(true)}>follow on twitter</a>

    {joinTelegram ?  <DoneIcon/> : <CloseIcon/>}

    </div>

    <div className='tasks__div'>
    <h1>retweet @ZEPCOIN on twitter</h1>

    <a target="_blank" href='https://twitter.com/zepcoinofficial' onClick={()=>setRetweet(true)}>follow on twitter</a>

    {retweet ?  <DoneIcon/> : <CloseIcon/>}

    </div>
   


    </div>

    </div>


   <h1> follow us or not</h1>
    <input value={checkFollowOrnot} className="forAdminpanel" onChange={setCheckfollowornot} />

    </div>
  )
}

export default Tasks