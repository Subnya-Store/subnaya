import React from 'react'
import DiscriptionPanel from '../ProductCart/DiscriptionPanel'
import ProductMiddlePanel from './ProductMiddlePanel'
import ProductRightPanel from '../ProductCart/ProductRightPanel'

export default function index() {
  return (
    <div className='flex  my-4' >
        <DiscriptionPanel/>
        <ProductMiddlePanel/>
        <ProductRightPanel/>
    </div>
  )
}
