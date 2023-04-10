import React from 'react'
import Clock from '../components/clock';
import Layout from '../components/Layout';

function clockwall() {
  return (
    <Layout>
      <Clock clockColor='white' backgroundColor='black' />
      <Clock clockColor='black' backgroundColor='white' />
      <Clock clockColor='red' backgroundColor='blue' />
      <Clock clockColor='blue' backgroundColor='red' />
      <Clock clockColor='yellow' backgroundColor='green' />
      <Clock clockColor='green' backgroundColor='yellow' />
      <Clock clockColor='#E7E247' backgroundColor='#3D3B30' />
      <Clock clockColor='#3D3B30' backgroundColor='#E7E247' />
      <Clock clockColor='#5C80BC' backgroundColor='#4D5061' />
      <Clock clockColor='#4D5061' backgroundColor='#5C80BC' />
      
      
    </Layout>
  )
}

export default clockwall