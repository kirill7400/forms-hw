import './assets/style.css'
import Tooltip from "./class/Tooltip";

const btnDown = document.querySelector('.cube-btn.down')
const btnUp = document.querySelector('.cube-btn.up')
const btnLeft = document.querySelector('.cube-btn.left')
const btnRight = document.querySelector('.cube-btn.right')

const tooltipDown = new Tooltip(btnDown, 'down')
const tooltipUp = new Tooltip(btnUp, 'up')
const tooltipLeft = new Tooltip(btnLeft, 'left')
const tooltipRight = new Tooltip(btnRight, 'right')
