export {};

declare global {
  interface Window {
    'MathJax':any; // whatever type you want to give. (any,number,float etc)
  }
}