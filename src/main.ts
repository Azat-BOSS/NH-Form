import Slider from './modules/Slider/Slider';
import HeaderMove from './modules/HeaderMove/HeaderMove';
import { SliderOptions, SliderModules, EventModules, EventOptions } from './utils/constants/constants';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function main(): void {
  const slider = new Slider(".slider", SliderModules, SliderOptions)
  const eventSlider = new Slider(".event-slider-block", EventModules, EventOptions)
  const headerMove = new HeaderMove()

  //sliders
  slider.render
  eventSlider.render

  //header
  headerMove.render
}
main()