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
                    <Col sm={4} className="square border border-5, square bg-secondary rounded-6">
                        <h3>{props.enemyThree.enemyName}</h3>
                        <ProgressBar variant="danger" min={0} max={props.enemyThree.enemyMaxHealth} now={props.enemyThree.enemyHealth} label={`Health ${props.enemyThree.enemyHealth}/${props.enemyThree.enemyMaxHealth}`}/>
                        <ProgressBar variant="warning" min={0} max={props.enemyThree.enemyMaxSpeed} now={props.enemyThree.enemySpeed} label={`Speed ${props.enemyThree.enemySpeed}/${props.enemyThree.enemyMaxSpeed}`}/>
                        <h3>Attack: {props.enemyThree.enemyAttackLow} - {props.enemyThree.enemyAttackHigh} </h3>
                        <h3>Armor: {props.enemyThree.enemyArmor}</h3>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default EnemyVisuals;