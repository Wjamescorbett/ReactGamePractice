import React , { Component } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './EnemyVisualsCSS.css'


const EnemyVisuals = (props) => {

    function test2(){
        let enemies = []
        enemies.push(props.enemyOne, props.enemyTwo, props.enemyThree)
        enemies.sort((a,b) => a.enemySpeed - b.enemySpeed)
        console.log(enemies)
        return(
                <Container>
                    <Row>
                    {enemies.map(enemy =>                         
                        <Col sm={4} className={`square border border-5, square bg-${enemy.enemyColor} rounded-6`}>
                            <h1>{enemy.enemyName}</h1>
                            <Row>
                                <Col>
                                    <h5>Attack: {enemy.enemyAttackLow} - {enemy.enemyAttackHigh}</h5>
                                </Col>
                                <Col>
                                    <h5>Armor: {enemy.enemyArmor}</h5>
                                </Col>
                            </Row>
                            <ProgressBar variant="danger" min={0} max={enemy.enemyMaxHealth} now={enemy.enemyHealth} label={`Health ${enemy.enemyHealth}/${enemy.enemyMaxHealth}`}/>
                            <ProgressBar variant="warning" min={0} max={enemy.enemyMaxSpeed} now={enemy.enemySpeed} label={`Speed ${enemy.enemySpeed}/${enemy.enemyMaxSpeed}`}/>
                        </Col>
                    )}
                    </Row>
                </Container>
        )
    }

    if(props.numberOfEnemiesInRoom === 1){
        return(
            <Container>
                <Row>
                    <Col sm={4} className="square border border-5, square bg-secondary rounded-6">
                        <h3>{props.enemyOne.enemyName}</h3>
                        <ProgressBar variant="danger" min={0} max={props.enemyOne.enemyMaxHealth} now={props.enemyOne.enemyHealth} label={`Health ${props.enemyOne.enemyHealth}/${props.enemyOne.enemyMaxHealth}`}/>
                        <ProgressBar variant="warning" min={0} max={props.enemyOne.enemyMaxSpeed} now={props.enemyOne.enemySpeed} label={`Speed ${props.enemyOne.enemySpeed}/${props.enemyOne.enemyMaxSpeed}`}/>
                        <h3>Attack: {props.enemyOne.enemyAttackLow} - {props.enemyOne.enemyAttackHigh} </h3>
                        <h3>Armor: {props.enemyOne.enemyArmor}</h3>
                    </Col>
                </Row>
            </Container>
        )
    }
    if(props.numberOfEnemiesInRoom === 2){
        return(
            <Container>
                <Row>
                    <Col sm={4} className="square border border-5, square bg-secondary rounded-6">
                        <h3>{props.enemyOne.enemyName}</h3>
                        <ProgressBar variant="danger" min={0} max={props.enemyOne.enemyMaxHealth} now={props.enemyOne.enemyHealth} label={`Health ${props.enemyOne.enemyHealth}/${props.enemyOne.enemyMaxHealth}`}/>
                        <ProgressBar variant="warning" min={0} max={props.enemyOne.enemyMaxSpeed} now={props.enemyOne.enemySpeed} label={`Speed ${props.enemyOne.enemySpeed}/${props.enemyOne.enemyMaxSpeed}`}/>
                        <h3>Attack: {props.enemyOne.enemyAttackLow} - {props.enemyOne.enemyAttackHigh} </h3>
                        <h3>Armor: {props.enemyOne.enemyArmor}</h3>
                    </Col>
                    <Col sm={4} className="square border border-5, square bg-secondary rounded-6">
                        <h3>{props.enemyTwo.enemyName}</h3>
                        <ProgressBar variant="danger" min={0} max={props.enemyTwo.enemyMaxHealth} now={props.enemyTwo.enemyHealth} label={`Health ${props.enemyTwo.enemyHealth}/${props.enemyTwo.enemyMaxHealth}`}/>
                        <ProgressBar variant="warning" min={0} max={props.enemyTwo.enemyMaxSpeed} now={props.enemyTwo.enemySpeed} label={`Speed ${props.enemyTwo.enemySpeed}/${props.enemyTwo.enemyMaxSpeed}`}/>
                        <h3>Attack: {props.enemyTwo.enemyAttackLow} - {props.enemyTwo.enemyAttackHigh} </h3>
                        <h3>Armor: {props.enemyTwo.enemyArmor}</h3>
                    </Col>
                </Row>
            </Container>
        )
    }
    if(props.numberOfEnemiesInRoom === 3){
        return(
            <div>
                {test2()}
            </div>
        )
    }
}

export default EnemyVisuals;