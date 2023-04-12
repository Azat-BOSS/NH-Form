import Swiper from "swiper";
import { SwiperModule } from "swiper/types/shared";
import { ISlider } from "./interface";
import { TSliderOptions } from "../../utils/types/type";

class Slider implements ISlider {
  block: string;
  modules: any[];
  SliderOptions: TSliderOptions;

  constructor(block: string, modules: SwiperModule[], SliderOptions: TSliderOptions) {
    this.block = block
    this.modules = modules
    this.SliderOptions = SliderOptions
  }

  private configSwiper() {
    new Swiper(`${this.block}`, {
      modules: this.modules,
      pagination: {
        el: this.SliderOptions?.pagination.el,
        clickable: this.SliderOptions?.pagination.clickable!,
      },
      navigation: {
        nextEl: this.SliderOptions?.navigation.nextEl,
        prevEl: this.SliderOptions?.navigation.prevEl,
      },
      slidesPerView: this.SliderOptions?.slidesPerView,
      spaceBetween: this.SliderOptions?.spaceBetween,
      centeredSlides: true
    })
  }

  public get render() {
    return this.configSwiper()
  }
}

export default Slider