import React from 'react'
import { connect } from 'react-redux'
import FreeCompany from './FreeCompany'
import FriendsList from './FriendsList'
import Chart from 'chart.js'

var ctx = 'myChart';
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})

function Character(props){
    console.log(props)
return(
    <div>
        <div className='flex'>
            <img className='profile' src={props.characterInfo.Portrait} />    
            
            <div>
                <h1>{props.characterInfo.Name}</h1>
                <h4>{props.characterInfo.Server}</h4>
                <h6>({props.characterInfo.DC})</h6>
                <br />
                <p>Current Job: {props.characterInfo.ActiveClassJob.Name} lvl.{props.characterInfo.ActiveClassJob.Level}</p>
                <canvas id="myChart" width="400" height="400"></canvas>
            </div>  
        </div>
        <div className='flex wrap' >
        {props.characterInfo.ClassJobs.map( e => {
        const classArray = e.Name.split(/(.*)\/ /g)
        const classIcon = classArray[2]
        const classFix = classIcon.replace(/ /g,'')
        return(<div className='classCard'>
            <img className='classImg' src={`https://xivapi.com/cj/1/${classFix}.png`} />
            <p>Level: {e.Level}</p>
            </div>)
        })}
        </div>
            {props.freeCompany ? 
            (<div>
                <h2>FreeCompany</h2>
                <FreeCompany />
            </div>)
            :null} 
        <div>{props.friends[0] ? (<h2>Friends</h2>) : null}
            <FriendsList />
        </div>
    </div>


)

}
const mapStateToProps = state => {
    return{
        characterInfo: state.characterInfo,
        friends: state.friendsList,
        freeCompany: state.freecompanyInfo
    }
}

export default connect(mapStateToProps, {})(Character);