import "./index.scss";
const DEFAULT_OPTIONS = {
  placement: 'top',
  tipClassName: 'my-tooltip'
}

const isShowName = 'is-show-tip'
const HIDE_DELAY = 300
export default class Tooltip{
  constructor(el, options){
    this.el = el;
    this.handleOptions(options)
    this.init()
  }
  handleOptions(options){
    options = options || {}
    options.tipClassName = DEFAULT_OPTIONS.tipClassName + (options.customTipClassName && (' ' + options.customTipClassName) || '')
    this.options = Object.assign({}, DEFAULT_OPTIONS, options)
  }
  init(){
    if(!this.el){
      throw new Error('缺少元素!')
    }
    this.tipEl = this.buildTip()
    this.el.addEventListener('mouseenter', e => this.whenShowTip(e))

    this.el.addEventListener('mouseleave', e => this.whenHideTip(e))
  }
  buildTip(){
    let opts = this.options;
    let tip = document.createElement('div')
    tip.className = opts.tipClassName
    const rect = this.el.getBoundingClientRect()
    tip.innerHTML = this.el.textContent
    document.body.appendChild(tip)
    tip.setAttribute('style', `position: absolute;left: ${rect.left }px;top: ${rect.top - tip.getBoundingClientRect().height}px;`)

    tip.addEventListener('mouseenter', e => this.whenShowTip(e))
    tip.addEventListener('mouseleave', e => this.whenHideTip(e))

    return tip
  }
  whenShowTip(e){
    clearTimeout(this.hideDelayId)
    if(!new RegExp(` ${isShowName}`).test(this.tipEl.className)){
      this.tipEl.className += ` ${isShowName}`
    }
  }
  whenHideTip(e){
    this.hideDelayId = setTimeout(() => {
        this.tipEl.className = this.tipEl.className.replace(new RegExp(` ${isShowName}`), '')
        clearTimeout(this.hideDelayId)
    }, HIDE_DELAY)
  }
}
