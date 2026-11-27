/* Abertura animada RDO MCA / EDR9 */
(function(){
  var css = ''
  + '#intro{position:fixed;inset:0;background:radial-gradient(120% 90% at 50% 40%,#0a6264 0%,#004d4e 55%,#003738 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:99999;padding:env(safe-area-inset-top) 20px env(safe-area-inset-bottom);overflow:hidden;font-family:Sora,Arial,sans-serif}'
  + '#intro.sai{animation:iSobe .7s cubic-bezier(.7,0,.3,1) forwards}'
  + '#intro .marca{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}'
  + '#intro .marca span{font-weight:800;font-size:min(58vw,46vh);letter-spacing:-.04em;line-height:1;color:#08595a;opacity:0;transform:scale(1.15);animation:iMarca 2.6s ease-out .1s forwards;white-space:nowrap}'
  + '@media (orientation:portrait){#intro .marca span{writing-mode:vertical-rl;transform:rotate(180deg) scale(1.15);animation-name:iMarcaV;font-size:min(60vh,95vw)}}'
  + '#intro .mca{display:flex;gap:.08em;font-weight:800;font-size:min(20vw,90px);color:#fff;position:relative;letter-spacing:.02em}'
  + '#intro .proj{margin-top:10px;display:flex;align-items:baseline;gap:.35em;color:#cfeee9;font-weight:600;font-size:min(6vw,24px);position:relative}'
  + '#intro .edr{display:flex;gap:.12em;color:#03c9b3;font-weight:800;font-size:1.35em;letter-spacing:.04em}'
  + '#intro .l{display:inline-block;opacity:0;transform:translateY(18px);animation:iLetra .45s cubic-bezier(.2,.9,.3,1.2) forwards}'
  + '#intro .pw{opacity:0;animation:iFade .5s ease forwards 1.25s}'
  + '#intro .linha{width:0;height:3px;background:#03c9b3;border-radius:3px;margin-top:18px;animation:iLinha .8s ease forwards 2s;position:relative}'
  + '#intro .pular{position:absolute;right:16px;top:calc(env(safe-area-inset-top) + 14px);background:rgba(255,255,255,.12);color:#fff;border:1px solid rgba(255,255,255,.25);border-radius:20px;padding:8px 16px;font:600 14px Sora,Arial,sans-serif;z-index:2}'
  + '@keyframes iLetra{to{opacity:1;transform:none}}'
  + '@keyframes iFade{to{opacity:1}}'
  + '@keyframes iLinha{to{width:min(52vw,220px)}}'
  + '@keyframes iMarca{to{opacity:1;transform:scale(1)}}'
  + '@keyframes iMarcaV{to{opacity:1;transform:rotate(180deg) scale(1)}}'
  + '@keyframes iSobe{to{transform:translateY(-100%)}}'
  + '@media (prefers-reduced-motion:reduce){#intro,#intro *{animation-duration:.01s!important;animation-delay:0s!important}}';

  var st = document.createElement('style');
  st.textContent = css;
  (document.head || document.documentElement).appendChild(st);

  function letras(txt, ini){
    return txt.split('').map(function(c,i){
      return '<span class="l" style="animation-delay:' + (ini + i*0.15).toFixed(2) + 's">' + c + '</span>';
    }).join('');
  }

  function montar(){
    var d = document.createElement('div');
    d.id = 'intro';
    d.innerHTML =
        '<div class="marca"><span>EDR9</span></div>'
      + '<button class="pular" type="button">Pular</button>'
      + '<div class="mca">' + letras('MCA', 0.3) + '</div>'
      + '<div class="proj"><span class="pw">Projeto</span><span class="edr">' + letras('EDR9', 1.4) + '</span></div>'
      + '<div class="linha"></div>';
    document.body.appendChild(d);
    var t;
    function sair(){
      clearTimeout(t);
      d.classList.add('sai');
      setTimeout(function(){ d.remove(); }, 800);
    }
    d.querySelector('.pular').addEventListener('click', sair);
    t = setTimeout(sair, 3200);
  }

  if (document.body) montar();
  else document.addEventListener('DOMContentLoaded', montar);
})();
