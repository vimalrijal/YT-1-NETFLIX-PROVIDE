import logo from './logo.svg';
import './App.css';

import user1Img from './assets/Images/1.png'
import user2Img from './assets/Images/2.png'
import user3Img from './assets/Images/3.png'
import user4Img from './assets/Images/4.webp'

function App() {
  return (
    <div className='w-full h-screen bg-black flex justify-center items-center'> 
      <div className='w-[975px] h-[440px]'>

        <div>
          <h1 className='text-white text-6xl text-center'>Who' Watching?</h1>
        </div>

        <div className='flex justify-around mt-[50px]'>

          <div className='flex flex-col justify-center items-center'>
            <img src={user1Img} className='w-[168px] h-[168px] rounded-md hover:border-4 hover:border-white'/>
            <h1 className='text-gray-500 text-2xl mt-[10px]'>User-1</h1>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <img src={user2Img} className='w-[168px] h-[168px] rounded-md hover:border-4 hover:border-white'/>
            <h1 className='text-gray-500 text-2xl mt-[10px]'>User-2</h1>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <img src={user3Img} className='w-[168px] h-[168px] rounded-md hover:border-4 hover:border-white'/>
            <h1 className='text-gray-500 text-2xl mt-[10px]'>User-3</h1>
          </div>

          <div className='flex flex-col justify-center items-center'>
            <img src={user4Img} className='w-[168px] h-[168px] rounded-md hover:border-4 hover:border-white'/>
            <h1 className='text-gray-500 text-2xl mt-[10px]'>User-4</h1>
          </div>

        </div>

        <div className='flex justify-center mt-[100px]'>
          <button className='text-gray-500 border border-gray-500 w-[210px] px-[10px] py-[10px] hover:text-white hover:border-white text-xl'>Manage Profile</button>
        </div>

      </div>
    </div>
  );
}

export default App;
