import React , { Component } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const EnemyVisuals = (props) => {
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
                        <h3>{props.enemyTwo.enemy2Name}</h3>
                        <ProgressBar variant="danger" min={0} max={props.enemyTwo.enemy2MaxHealth} now={props.enemyTwo.enemy2Health} label={`Health ${props.enemyTwo.enemy2Health}/${props.enemyTwo.enemy2MaxHealth}`}/>
                        <ProgressBar variant="warning" min={0} max={props.enemyTwo.enemy2MaxSpeed} now={props.enemyTwo.enemy2Speed} label={`Speed ${props.enemyTwo.enemy2Speed}/${props.enemyTwo.enemy2MaxSpeed}`}/>
                        <h3>Attack: {props.enemyTwo.enemy2AttackLow} - {props.enemyTwo.enemy2AttackHigh} </h3>
                        <h3>Armor: {props.enemyTwo.enemy2Armor}</h3>
                    </Col>
                </Row>
            </Container>
        )
    }
    if(props.numberOfEnemiesInRoom === 3){
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
                        <h3>{props.enemyTwo.enemy2Name}</h3>
                        <ProgressBar variant="danger" min={0} max={props.enemyTwo.enemy2MaxHealth} now={props.enemyTwo.enemy2Health} label={`Health ${props.enemyTwo.enemy2Health}/${props.enemyTwo.enemy2MaxHealth}`}/>
                        <ProgressBar variant="warning" min={0} max={props.enemyTwo.enemy2MaxSpeed} now={props.enemyTwo.enemy2Speed} label={`Speed ${props.enemyTwo.enemy2Speed}/${props.enemyTwo.enemy2MaxSpeed}`}/>
                        <h3>Attack: {props.enemyTwo.enemy2AttackLow} - {props.enemyTwo.enemy2AttackHigh} </h3>
                        <h3>Armor: {props.enemyTwo.enemy2Armor}</h3>
                    </Col>
                    <Col sm={4} className="square border border-5, square bg-secondary rounded-6">
                        <h3>{props.enemyThree.enemy3Name}</h3>
                        <ProgressBar variant="danger" min={0} max={props.enemyThree.enemy3MaxHealth} now={props.enemyThree.enemy3Health} label={`Health ${props.enemyThree.enemy3Health}/${props.enemyThree.enemy3MaxHealth}`}/>
                        <ProgressBar variant="warning" min={0} max={props.enemyThree.enemy3MaxSpeed} now={props.enemyThree.enemy3Speed} label={`Speed ${props.enemyThree.enemy3Speed}/${props.enemyThree.enemy3MaxSpeed}`}/>
                        <h3>Attack: {props.enemyThree.enemy3AttackLow} - {props.enemyThree.enemy3AttackHigh} </h3>
                        <h3>Armor: {props.enemyThree.enemy3Armor}</h3>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EnemyVisuals;