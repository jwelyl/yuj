import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStudio, createStudio, changeStudioName, changeStudioDesc } from '../stores/studioSlice';



const StudioPage = () => {

    //이 컴포넌트에서만 사용할 state는 useState로 만들기
    const [ studioName, setStudioName ] = useState("");
    const [ studioDesc, setStudioDesc ] = useState("");

    //redux에서 관리하는 state는 useSelector로 가져오기 
    const studio = useSelector(state => state.studio);

    //redux에서 관리하는 state를 변경하기 위한 메서드 가져오기
    const dispatch = useDispatch();

    return (
          <div>
            <h1>스튜디오 컴포넌트</h1>
            <hr/>
            
            <p className='text-sm'>스튜디오 이름 : {studio.studioName}</p>
            <p className='text-sm'>스튜디오 소개글 : {studio.studioDesc}</p>
            
            
            <div className='m-3'>
                <button className='text-lg border' onClick={() => dispatch(changeStudioName("수정함"))}>스튜디오 이름 수정하기</button>
            </div>
            
            <div className='m-3'>
                <button className='text-lg border' onClick={() => dispatch(changeStudioDesc("수정함"))}>스튜디오 소개글 수정하기</button>
            </div>
            
            <div className='m-3'>
                <button className='text-lg border' onClick={() => dispatch(getStudio(1))}>스튜디오 가져오기 API</button>
            </div>
            <hr/>

            <div className='m-3'>
                <p className='text-sm'>스튜디오 이름 : </p>
                <input type="text" placeholder="Type here" className="bg-neutral input input-bordered input-info w-full max-w-xs" onChange={(e) => setStudioName(e.target.value)}/>
            </div>

            <div className='m-3'>
                <p className='text-sm'>스튜디오 소개글 : </p>
                <input type="text" placeholder="Type here" className="bg-neutral input input-bordered input-info w-full max-w-xs" onChange={(e) => setStudioDesc(e.target.value)}/>
            </div>
            
            <div>
                <button className='text-lg border' onClick={() => dispatch(createStudio({teacherId: studio.teacherId, studioName: studioName, studioDesc: studioDesc}))}>스튜디오 생성하기 API</button>
            </div>
          </div>
      );
}

export default StudioPage;