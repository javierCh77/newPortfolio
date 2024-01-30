import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
  
    <div class=" bg-slate-800 mt-8 max-w-sm rounded overflow-hidden shadow-lg outline outline-offset-2 outline-1">
    <div class="px-6 py-4">
      <p className='text-orange-200'>{props.date}</p>
      <div class="font-bold text-xl mb-2">{props.name}</div>
      <p class="text-gray-400 text-base">
      {props.text}
      </p>
      <p className={`${props.color}`}>{props.framwork}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <Link to={props.articule} target='_blank' class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Article</Link>
      <Link to={props.demo} target='_blank'  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Demo</Link>
    </div>
  </div>
  )
}