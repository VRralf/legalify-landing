// Logger utility para manejar logs de manera segura
export class Logger {
  private static isDevelopment = process.env.NODE_ENV === 'development';
  
  static log(message: any, ...args: any[]) {
    if (this.isDevelopment) {
      console.log(message, ...args);
    }
  }
  
  static warn(message: any, ...args: any[]) {
    if (this.isDevelopment) {
      console.warn(message, ...args);
    }
  }
  
  static error(message: any, ...args: any[]) {
    if (this.isDevelopment) {
      console.error(message, ...args);
    }
  }
  
  static info(message: any, ...args: any[]) {
    if (this.isDevelopment) {
      console.info(message, ...args);
    }
  }
}

export default Logger;
