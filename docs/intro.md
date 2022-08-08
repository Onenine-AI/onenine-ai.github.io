---
id: intro
title: OneNine AI Documentation
sidebar_label: Getting Started
slug: /
sidebar_position: 0
---

import { Button } from '@mui/material';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

          
<Grid container spacing={2} marginLeft={1} columns={{ xs: 1, sm: 4, md: 12 }} direction="row" alignItems="center">
    <Grid item xs={2} sm={4} md={4} key={9}>
        <Card style={{width: '100%', height: '100%', borderRadius: 10, boxShadow: "5px 5px gray" }}>
        <CardContent>
            <div className='row'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:25}}>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 6.34315 3.34315 5 5 5H19C20.6569 5 22 6.34315 22 8V16C22 17.6569 20.6569 19 19 19H5C3.34315 19 2 17.6569 2 16V8ZM5 7H19C19.5523 7 20 7.44771 20 8V11H4V8C 7.44772 4.44772 7 5 7ZM4 13V16C4 16.5523 4.44772 17 5 17H8V13H4ZM10 17H19C19.5523 17 20 16.5523 20 16V13H10V17Z" fill="currentColor"/>
            </svg>
                <Typography variant="h6" component="h5" style={{ marginLeft: 30, marginBottom: 5, htmlFontSize: 5}}>
                Platform Overview
                </Typography>
            </div>
            <Typography variant="body2" component="p" style={{marginBottom: 5 }}>
            Get familiar with the OneNine Cloud Dashboard.
            </Typography>
            <Button variant="contained" color="primary" style={{textTransform: 'none'}} href="/docs/tutorials/platform-overview-tutorial/">
            Read More <ArrowForwardIcon />
            </Button>
        </CardContent>
        </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4} key={1}>
        <Card style={{width: '100%', height: '100%', borderRadius: 10, boxShadow: "5px 5px gray", boxShadow: "5px 5px gray"}}>
        <CardContent>
            <div className='row'>
                <DeveloperModeIcon style={{marginLeft:25}}/>
                <Typography variant="h5" component="h2" style={{ marginLeft: 30, marginBottom: 5}}>
                Data Literacy
                </Typography>
            </div>
            <Typography variant="body2" component="p" style={{marginBottom: 5}}>
            Data literacy is a term used to describe an individual’s ability to read, understand, and utilize data in different ways.
            </Typography>
            <Button variant="contained" color="primary" style={{textTransform: 'none'}} href="/docs/tutorials/data-literacy-tutorial/">
            Read More <ArrowForwardIcon />
            </Button>
        </CardContent>
        </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4} key={2}>
        <Card style={{width: '100%', height: '100%', borderRadius: 10, boxShadow: "5px 5px gray"}}>
        <CardContent>
            <div className='row'>
            <svg class="w-6 h-6" style={{marginLeft:25}} height="24" width="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                <Typography variant="h5" component="h2" style={{ marginLeft: 30, marginBottom: 5}}>
                Data Analysis
                </Typography>
            </div>
            <Typography variant="body2" component="p" style={{marginBottom: 5}}>
            Data analysis is defined as a process of cleaning, transforming, and modeling data to discover useful information for business decision-making.
            </Typography>
            <Button variant="contained" color="primary" style={{textTransform: 'none'}} href="/docs/tutorials/data-exploration-tutorial">
            Read More <ArrowForwardIcon />
            </Button>
        </CardContent>
        </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4} key={3}>
        <Card style={{width: '100%', height: '100%', borderRadius: 10, boxShadow: "5px 5px gray" }}>
        <CardContent>
            <div className='row'>
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft:25}} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M21 17h-5.397a5 5 0 0 1 -4.096 -2.133l-.514 -.734a5 5 0 0 0 -4.096 -2.133h-3.897"></path>
                    <path d="M21 7h-5.395a5 5 0 0 0 -4.098 2.135l-.51 .73a5 5 0 0 1 -4.097 2.135h-3.9"></path>
                    <path d="M18 10l3 -3l-3 -3"></path>
                    <path d="M18 20l3 -3l-3 -3"></path>
                </svg>
                <Typography variant="h6" component="h6" style={{ marginLeft: 30, marginBottom: 5}}>
                Data Visualization
                </Typography>
            </div>
            <Typography variant="body2" component="p" style={{marginBottom: 5}}>
            Visualize your data, from simple line charts to highly detailed geospatial charts with few clicks.
            </Typography>
            <Button variant="contained" color="primary" style={{textTransform: 'none'}} href="/docs/tutorials/data-visualization-tutorial">
            Read More <ArrowForwardIcon />
            </Button>
        </CardContent>
        </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4} key={4}>
        <Card style={{width: '100%', height: '100%', borderRadius: 10, boxShadow: "5px 5px gray"}}>
        <CardContent>
            <div className='row'>
            <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: 25}} class="icon icon-tabler icon-tabler-chart-dots" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 3v18h18"></path>
            <circle cx="9" cy="9" r="2"></circle>
            <circle cx="19" cy="7" r="2"></circle>
            <circle cx="14" cy="15" r="2"></circle>
            <line x1="10.16" y1="10.62" x2="12.5" y2="13.5"></line>
            <path d="M15.088 13.328l2.837 -4.586"></path>
            </svg>
                <Typography variant="h5" component="h2" style={{ marginLeft: 30, marginBottom: 5}}>
                AI Projects
                </Typography>
            </div>
            <Typography variant="body2" component="p" style={{marginBottom: 5}}>
            Pick and Choose from the marketplace of most popular machine learning models in the world.
            </Typography>
            <Button variant="contained" color="primary" style={{textTransform: 'none'}} href="/docs/tutorials/ai-project-tutorial">
            Read More <ArrowForwardIcon />
            </Button>
        </CardContent>
        </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4} key={5}>
        <Card style={{width: '100%', height: '100%', borderRadius: 10, boxShadow: "5px 5px gray"}}>
        <CardContent>
            <div className='row'>
            <svg style={{marginLeft:25}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 1H1V9H9V6H11V20H15V23H23V15H15V18H13V6H15V9H23V1H15V4H9V1ZM21 3H17V7H21V3ZM17 17H21V21H17V17Z" fill="currentColor"/>
            </svg>
                <Typography variant="h5" component="h3" style={{ marginLeft: 30, marginBottom: 5}}>
                Smart Models
                </Typography>
            </div>
            <Typography variant="body2" component="p" style={{marginBottom: 5}}>
            Smart enough to choose right algorithm & approach based on your data.
            </Typography>
            <Button variant="contained" color="primary" style={{textTransform: 'none'}} href="/docs/tutorials/smart-model-tutorial">
            Read More <ArrowForwardIcon />
            </Button>
        </CardContent>
        </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4} key={6}>
        <Card style={{width: '100%', height: '100%', borderRadius: 10, boxShadow: "5px 5px gray" }}>
        <CardContent>
            <div className='row'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:25}}>
            <path d="M17 15H19V17H17V15Z" fill="currentColor" />
            <path d="M19 11H17V13H19V11Z" fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13 7H23V21H1V3H13V7ZM8 5H11V7H8V5ZM11 19V17H8V19H11ZM11 15V13H8V15H11ZM11 11V9H8V11H11ZM21 19V9H13V11H15V13H13V15H15V17H13V19H21ZM3 19V17H6V19H3ZM3 15H6V13H3V15ZM6 11V9H3V11H6ZM3 7H6V5H3V7Z" fill="currentColor" />
            </svg>
                <Typography variant="h5" component="h2" style={{ marginLeft: 30, marginBottom: 5}}>
                Discovery Project
                </Typography>
            </div>
            <Typography variant="body2" component="p" style={{marginBottom: 5}}>
            Discovery project is an easy way to build highly customized neural networks without any coding.
            </Typography>
            <Button variant="contained" color="primary" style={{textTransform: 'none'}} href="/docs/tutorials/discovery-project-tutorial">
            Read More <ArrowForwardIcon />
            </Button>
        </CardContent>
        </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4} key={7}>
        <Card style={{width: '100%', height: '100%', borderRadius: 10, boxShadow: "5px 5px gray" }}>
        <CardContent>
            <div className='row'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:25}}>
            <path d="M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12Z" fill="currentColor" />
            <path d="M9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13Z" fill="currentColor" />
            <path d="M14 12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12Z" fill="currentColor" />
            <path d="M20 11H16V13H20V11Z" fill="currentColor" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C0.895431 6 0 6.89543 0 8V16C0 17.1046 0.89543 18 2 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H2ZM22 8H2L2 16H22V8Z" fill="currentColor" />
            </svg>
                <Typography variant="h5" component="h2" style={{ marginLeft: 30, marginBottom: 5}}>
                Completed Projects
                </Typography>
            </div>
            <Typography variant="body2" component="p" style={{marginBottom: 5}}>
            Access your completed projects.
            </Typography>
            <Button variant="contained" color="primary" style={{textTransform: 'none'}} href="/docs/tutorials/completed-project-tutorial">
            Read More <ArrowForwardIcon />
            </Button>
        </CardContent>
        </Card>
    </Grid>
    <Grid item xs={2} sm={4} md={4} key={8}>
        <Card style={{width: '100%', height: '100%', borderRadius: 10, boxShadow: "5px 5px gray" }}>
        <CardContent>
            <div className='row'>
            <svg width="24" height="24"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft:25}}>
            <path d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z" fill="currentColor" />
            <path d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z" fill="currentColor" />
            </svg>
                <Typography variant="h6" component="h5" style={{ marginLeft: 30, marginBottom: 5, htmlFontSize: 5}}>
                Realtime API
                </Typography>
            </div>
            <Typography variant="body2" component="p" style={{marginBottom: 5}}>
            After successfully building a Machine Learning/Deep Learning/Time series model, the primary question arises, How to use the model in real time?
            </Typography>
            <Button variant="contained" color="primary" style={{textTransform: 'none'}} href="/docs/tutorials/real-time-predictions-tutorial">
            Read More <ArrowForwardIcon />
            </Button>
        </CardContent>
        </Card>
    </Grid>
    
</Grid>