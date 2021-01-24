import { Opener } from './components/opener.js';
import {Slider} from './components/slider.js';
import { Countdown } from './components/timer.js';
import { Tabs } from './components/tabs.js';
import {popupOpener} from './components/popupOpener.js';

(function() {
const sliderElements = document.querySelectorAll('.slider');
    if (sliderElements) {
        sliderElements.forEach(element => new Slider(element));
}})();

(function() {
    const tabs = document.querySelectorAll('.tabs');
        if (tabs) {
            tabs.forEach(element => new Tabs(element));
    }})();

(function() {
    const openerElements = document.querySelectorAll('[data-js="opener"]');
    if (openerElements) {
    openerElements.forEach(element => new Opener(element));
}})();

(function() {
    const countElements = document.querySelectorAll('[data-timer]');
    if (countElements) {
        countElements.forEach(element => new Countdown(element));
}})();

(function() {
    const popupElements = document.querySelectorAll('[data-java]');
    if (popupElements) {
        popupElements.forEach(elt => new popupOpener(elt));
}})();
