export class Config {


    static MOBILE_PIXEL_WIDTH = 1500;

    static isMobile(): boolean {
        return window.innerWidth <= 1500;
    }

}