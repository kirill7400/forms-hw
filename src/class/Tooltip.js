class Tooltip {
  constructor(elem, position = 'down') {
    this.el = elem
    this.position = position
    this.show = false
    this.btnClick = this.btnClick.bind(this)

    this.el.addEventListener('click', this.btnClick)
  }

  btnClick(e) {
    this.show = !this.show

    let tooltip = this.createTooltip()

    this.show && this.el.parentElement.insertBefore(tooltip, this.el) && this.positionTooltip(tooltip)
    !this.show && e.target.previousElementSibling.remove()
  }

  createTooltip () {
    let tooltip, tooltipHeader, tooltipBody

    tooltip = document.createElement('div')
    tooltipHeader = document.createElement('div')
    tooltipBody = document.createElement('div')

    tooltip.classList.add('tooltip')
    tooltipHeader.classList.add('tooltip-header')
    tooltipBody.classList.add('tooltip-body')

    tooltipHeader.textContent = 'Header'
    tooltipBody.textContent = 'Body'

    tooltip.insertBefore(tooltipBody, null)
    tooltip.insertBefore(tooltipHeader, tooltipBody)

    return tooltip
  }

  positionTooltip(tooltip) {
    let {top, right, height, left, width} = this.el.getBoundingClientRect()
    let heightT = tooltip.getBoundingClientRect().height
    let widthT = tooltip.getBoundingClientRect().width

    switch (this.position) {
      case 'down':
        tooltip.style.top = top + height + 5 + 'px'
        break;
      case 'up':
        tooltip.style.top = top - heightT - 5 + 'px'
        break;
      case 'left':
        tooltip.style.left = left - widthT - 5 + 'px'
        tooltip.style.top = top + height / 2 - heightT / 2 - 5 + 'px'
        break;
      case 'right':
        tooltip.style.left = left + width + 5 + 'px'
        tooltip.style.top = top + height / 2 - heightT / 2 - 5 + 'px'
        break;
    }

    return tooltip
  }
}

export default Tooltip
