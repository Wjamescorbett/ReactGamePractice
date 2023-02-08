import React , { Component } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';


const EnemyVisuals = (props) => {
    if(props.numberOfEnemiesInRoom === 1){
        return(
            <div>
                <div className="w-25 p-3">
                    <ProgressBar variant="danger" min={0} max={props.enemyOne.enemyMaxHealth} now={props.enemyOne.enemyHealth} label={`Health ${props.enemyOne.enemyHealth}/${props.enemyOne.enemyMaxHealth}`}/>
                    <ProgressBar variant="warning" min={0} max={props.enemyOne.enemyMaxSpeed} now={props.enemyOne.enemySpeed} label={`Speed ${props.enemyOne.enemySpeed}/${props.enemyOne.enemyMaxSpeed}`}/>
                </div>
            </div>
        )
    }
    if(props.numberOfEnemiesInRoom === 2){
        return(
            <div>
                <div className="w-25 p-3">
                    <ProgressBar variant="danger" min={0} max={props.enemyOne.enemyMaxHealth} now={props.enemyOne.enemyHealth} label={`Health ${props.enemyOne.enemyHealth}/${props.enemyOne.enemyMaxHealth}`}/>
                    <ProgressBar variant="warning" min={0} max={props.enemyOne.enemyMaxSpeed} now={props.enemyOne.enemySpeed} label={`Speed ${props.enemyOne.enemySpeed}/${props.enemyOne.enemyMaxSpeed}`}/>
                </div>
                <div className="w-25 p-3">
                    <ProgressBar variant="danger" min={0} max={props.enemyTwo.enemy2MaxHealth} now={props.enemyTwo.enemy2Health} label={`Health ${props.enemyTwo.enemy2Health}/${props.enemyTwo.enemy2MaxHealth}`}/>
                    <ProgressBar variant="warning" min={0} max={props.enemyTwo.enemy2MaxSpeed} now={props.enemyTwo.enemy2Speed} label={`Speed ${props.enemyTwo.enemy2Speed}/${props.enemyTwo.enemy2MaxSpeed}`}/>
                </div>
            </div>
        )
    }
    if(props.numberOfEnemiesInRoom === 3){
        return(
        <div>
            <div className="w-25 p-3">
                    <ProgressBar variant="danger" min={0} max={props.enemyOne.enemyMaxHealth} now={props.enemyOne.enemyHealth} label={`Health ${props.enemyOne.enemyHealth}/${props.enemyOne.enemyMaxHealth}`}/>
                    <ProgressBar variant="warning" min={0} max={props.enemyOne.enemyMaxSpeed} now={props.enemyOne.enemySpeed} label={`Speed ${props.enemyOne.enemySpeed}/${props.enemyOne.enemyMaxSpeed}`}/>
                </div>
                <div className="w-25 p-3">
                    <ProgressBar variant="danger" min={0} max={props.enemyTwo.enemy2MaxHealth} now={props.enemyTwo.enemy2Health} label={`Health ${props.enemyTwo.enemy2Health}/${props.enemyTwo.enemy2MaxHealth}`}/>
                    <ProgressBar variant="warning" min={0} max={props.enemyTwo.enemy2MaxSpeed} now={props.enemyTwo.enemy2Speed} label={`Speed ${props.enemyTwo.enemy2Speed}/${props.enemyTwo.enemy2MaxSpeed}`}/>
                </div>
                <div className="w-25 p-3">
                    <ProgressBar variant="danger" min={0} max={props.enemyThree.enemy3MaxHealth} now={props.enemyThree.enemy3Health} label={`Health ${props.enemyThree.enemy3Health}/${props.enemyThree.enemy3MaxHealth}`}/>
                    <ProgressBar variant="warning" min={0} max={props.enemyThree.enemy3MaxSpeed} now={props.enemyThree.enemy3Speed} label={`Speed ${props.enemyThree.enemy3Speed}/${props.enemyThree.enemy3MaxSpeed}`}/>
                </div>
        </div>
        )
    }
}

export default EnemyVisuals;