;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-wangluo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M736.232934 118.192202h-448.922521L62.848129 506.970675 287.309389 895.749148h448.922521l224.46126-388.778473L736.232934 118.192202zM714.634073 858.33945H308.90825l-202.862399-351.368775L308.909274 155.602924h405.725823l202.862399 351.368775L714.634073 858.33945z"  ></path>' +
    '' +
    '<path d="M680.117875 521.647048c-14.008799 0-26.808389 5.145024-36.64076 13.634057l-136.371287-77.926889A93.415201 93.415201 0 0 0 511.771674 428.121266a93.632265 93.632265 0 0 0-3.184284-24.257891l95.178332-47.589166c10.092438 9.734078 23.812501 15.731998 38.941431 15.731998 30.991985 0 56.115059-25.124098 56.115059-56.115059 0-30.991985-25.124098-56.115059-56.115059-56.115059-30.991985 0-56.115059 25.124098-56.115059 56.115059 0 2.346745 0.16075 4.653559 0.44027 6.924537l-95.186523 47.593261c-17.122434-21.805686-43.725023-35.813461-73.599949-35.813461-51.652967 0-93.525781 41.872814-93.525781 93.525781 0 39.839378 24.913178 73.854896 60.006848 87.333323l-13.646344 81.87499c-26.33945 4.618747-46.361528 27.590638-46.361528 55.252948 0 30.991985 25.124098 56.115059 56.11506 56.115059 30.991985 0 56.115059-25.124098 56.115059-56.115059 0-21.142208-11.696866-39.544499-28.96674-49.112708l13.648391-81.891372c26.64252-0.949142 50.444782-13.038156 66.891453-31.755803l136.38562 77.934055a56.411986 56.411986 0 0 0-0.907162 10.004384c0 30.991985 25.124098 56.115059 56.115059 56.115059 30.991985 0 56.115059-25.124098 56.115059-56.115059 0.002048-30.989937-25.121026-56.114035-56.113011-56.114035z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tixing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M891.851 813.716L814 701.561V411.873c0-61.969-24.132-120.229-67.951-164.048-43.82-43.82-102.079-67.952-164.049-67.952h-38V153c0-17.673-14.327-32-32-32s-32 14.327-32 32v26.873h-38c-61.97 0-120.23 24.132-164.049 67.952C234.132 291.644 210 349.904 210 411.873v289.688l-77.85 112.155a31.999 31.999 0 0 0 26.288 50.247h245.508C416.92 911.461 460.444 946.48 512 946.48s95.08-35.019 108.054-82.518h245.508a32 32 0 0 0 26.289-50.246zM512 882.48c-15.359 0-29.045-7.259-37.837-18.518h75.675c-8.792 11.259-22.479 18.518-37.838 18.518z m-292.396-82.517l48.684-70.138A32.002 32.002 0 0 0 274 711.578V411.873c0-92.636 75.364-168 168-168h140c92.636 0 168 75.364 168 168v299.705a32.002 32.002 0 0 0 5.712 18.247l48.686 70.138H219.604z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M862.609 816.955L726.44 680.785l-0.059-0.056a358.907 358.907 0 0 0 56.43-91.927c18.824-44.507 28.369-91.767 28.369-140.467 0-48.701-9.545-95.96-28.369-140.467-18.176-42.973-44.19-81.56-77.319-114.689-33.13-33.129-71.717-59.144-114.69-77.32-44.507-18.825-91.767-28.37-140.467-28.37-48.701 0-95.96 9.545-140.467 28.37-42.973 18.176-81.56 44.19-114.689 77.32-33.13 33.129-59.144 71.717-77.32 114.689-18.825 44.507-28.37 91.767-28.37 140.467 0 48.7 9.545 95.96 28.37 140.467 18.176 42.974 44.19 81.561 77.32 114.69 33.129 33.129 71.717 59.144 114.689 77.319 44.507 18.824 91.767 28.369 140.467 28.369 48.7 0 95.96-9.545 140.467-28.369 32.78-13.864 62.997-32.303 90.197-54.968 0.063 0.064 0.122 0.132 0.186 0.195l136.169 136.17c6.25 6.25 14.438 9.373 22.628 9.373 8.188 0 16.38-3.125 22.627-9.372 12.496-12.496 12.496-32.758 0-45.254z m-412.274-69.466c-79.907 0-155.031-31.118-211.534-87.62-56.503-56.503-87.62-131.627-87.62-211.534s31.117-155.031 87.62-211.534c56.502-56.503 131.626-87.62 211.534-87.62s155.031 31.117 211.534 87.62c56.502 56.502 87.62 131.626 87.62 211.534s-31.118 155.031-87.62 211.534c-56.503 56.502-131.627 87.62-211.534 87.62z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)