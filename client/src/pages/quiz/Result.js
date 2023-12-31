import React, { useEffect } from 'react'
import '../.././styles/result.css';
import "../../styles/default.css";
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

/*********importing action ********* */
import { resetResultAction } from './redux/result_reducer';
import { resetAllAction } from './redux/question_reducer';
import { usePublishResult } from './Hooks/setResult';
import { attempts_Number, earnPoints_Number, flagResult } from './helper/helper';


export default function Result() {

   const dispatch = useDispatch();

   const { questions: { queue, answers }, result: { result, userId } } = useSelector(state => state);
   

   useEffect(() => {
      console.log(flag);
   })
   

   const totalPoints = queue.length * 10;
   const attempts = attempts_Number(result);
   const earnPoints = earnPoints_Number(result, answers, 10)
   const flag = flagResult(totalPoints, earnPoints)

   /**************Store user result from frontend to backend *************************** */
   usePublishResult({
      result,
      username: userId,
      attempts,
      points: earnPoints,
      achived: flag ? "Passed" : "Failed"
   });



   function onRestart() {
      dispatch(resetAllAction())
      dispatch(resetResultAction())

      //console.log('Restarted');
   }
   console.log(userId);
   return (
      <div className='container'>
         <h1 className='title text-light'>Quiz</h1>
         <div className='result flex-center'>
            <div className='flex'>
               <span>Username</span>
               <span className='bold'>{userId || ""}</span>
            </div>

            <div className='flex'>
               <span>Total Quiz Points:</span>
               <span className='bold'> {totalPoints || 0}</span>
            </div>

            <div className='flex'>
               <span>Total Question:</span>
               <span className='bold'> {queue.length || 0}</span>
            </div>

            <div className='flex'>
               <span>Total Attempts:</span>
               <span className='bold'> {attempts || 0}</span>
            </div>

            <div className='flex'>
               <span>Total Earn Points:</span>
               <span className='bold'> {earnPoints || 0}</span>
            </div>

            <div className='flex'>
               <span>Quiz Result</span>
               <span style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }} className='bold'> {flag ? "PASSED" : "FAILED"}</span>
            </div>
         </div>
         <div className='start'>
            <Link className='btn' to={'/main '} onClick={onRestart}>Restart</Link>
         </div>
      </div>
   )
}
