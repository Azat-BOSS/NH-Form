export type TSliderOptions = {
  pagination: {
    el?: string;
    type?: string | null,
    clickable?: boolean | null
  },
  navigation: {
    nextEl?: string,
    prevEl?: string
  },
  slidesPerView?: any,
  spaceBetween?: number,
}