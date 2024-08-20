import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AxiosInstance from './axios'
import { useNavigate, useParams } from 'react-router-dom'

function Delete() {

  const myParams = useParams()
  const MyId = myParams.id

  const [myData, setMydata] = useState(null) // Initialize with null
  const [loading, setLoading] = useState(true)

  const GetData = () => {
    AxiosInstance.get(`project/${MyId}`).then((res) => {
      setMydata(res.data)
      console.log(res.data);
      setLoading(false)
    })
  }

  useEffect(() => {
    GetData()
  }, [])

  const navigate = useNavigate()

  const submission = () => {
    AxiosInstance.delete(`project/${MyId}/`, {})
      .then((res) => {
        navigate('/')
      })
  }

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div>
          <Box sx={{ display: 'flex', width: '100%', backgroundColor: '#00003f', marginBottom: '10px' }}>
            <Typography sx={{ marginLeft: '20px', color: '#fff' }}>
              Delete Project:
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', width: '100%', boxShadow: 3, padding: 4, flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
              Are you sure you want to delete Project: {myData?.name || 'Unknown'}
            </Box>
            <Box sx={{ width: '25%' , marginLeft:'36%' }}>
              <Button variant='contained' onClick={submission} sx={{ width: '100%', backgroundColor:'brown' }}>
                Delete the Project
              </Button>
            </Box>
          </Box>
        </div>
      )}
    </div>
  )
}

export default Delete
