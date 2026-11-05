/* @ds-bundle: {"format":4,"namespace":"XperiensDigitalDesignSystem_ecf547","components":[{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Divider","sourcePath":"components/content/Divider.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"ChatDialog","sourcePath":"components/marketing/ChatDialog.jsx"},{"name":"CookieBanner","sourcePath":"components/marketing/CookieBanner.jsx"},{"name":"FAQAccordion","sourcePath":"components/marketing/FAQAccordion.jsx"},{"name":"Hero","sourcePath":"components/marketing/Hero.jsx"},{"name":"LogoStrip","sourcePath":"components/marketing/LogoStrip.jsx"},{"name":"PricingCard","sourcePath":"components/marketing/PricingCard.jsx"},{"name":"PromoBanner","sourcePath":"components/marketing/PromoBanner.jsx"},{"name":"ServiceTile","sourcePath":"components/marketing/ServiceTile.jsx"},{"name":"VideoBlock","sourcePath":"components/marketing/VideoBlock.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"}],"sourceHashes":{"components/content/Callout.jsx":"792240894467","components/content/Card.jsx":"8d121baeaaf5","components/content/Divider.jsx":"8074be2d2d47","components/content/Quote.jsx":"b8606447643c","components/content/StatBlock.jsx":"301ef1d03f62","components/forms/Button.jsx":"d30bc7742ca0","components/forms/Checkbox.jsx":"47ab044c593d","components/forms/Input.jsx":"e6efa492e2fe","components/forms/Textarea.jsx":"7aa86a6db06b","components/forms/Toggle.jsx":"fb59f3951d0f","components/marketing/ChatDialog.jsx":"de9a8b3b7804","components/marketing/CookieBanner.jsx":"9aeccef7e60d","components/marketing/FAQAccordion.jsx":"726e6f4c1fae","components/marketing/Hero.jsx":"ebd1afe302b6","components/marketing/LogoStrip.jsx":"b199aae5cfac","components/marketing/PricingCard.jsx":"3ba907da06c3","components/marketing/PromoBanner.jsx":"a0b3668666a0","components/marketing/ServiceTile.jsx":"7ef086e9296f","components/marketing/VideoBlock.jsx":"d94e5eeeadef","components/navigation/Footer.jsx":"887f83e2eb65","components/navigation/Navbar.jsx":"63addda8f145","ui_kits/website/MarketingSite.jsx":"51085c8b18c2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.XperiensDigitalDesignSystem_ecf547 = window.XperiensDigitalDesignSystem_ecf547 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Callout.jsx
try { (() => {
function Callout({
  label = 'NOTE',
  children
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--xd-panel)',
      borderRadius: 6,
      padding: '22px 26px',
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, React.createElement('span', {
    style: {
      width: 6,
      height: 6,
      background: 'var(--xd-ink)',
      flex: 'none',
      marginTop: 6
    }
  }), React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, React.createElement('div', {
    style: {
      font: '700 13px Figtree',
      letterSpacing: '.04em',
      color: 'var(--xd-ink)'
    }
  }, label), React.createElement('div', {
    style: {
      font: '400 15px/1.5 Figtree',
      color: 'var(--xd-ink)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function Card({
  children,
  padding = 28,
  style
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--xd-panel)',
      borderRadius: 6,
      padding,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Divider.jsx
try { (() => {
function Divider({
  variant = 'rule'
}) {
  if (variant === 'dotted') {
    return React.createElement('div', {
      style: {
        display: 'flex',
        gap: 6
      }
    }, [...Array(12)].map((_, i) => React.createElement('div', {
      key: i,
      style: {
        width: 4,
        height: 4,
        background: 'var(--xd-ink)'
      }
    })));
  }
  const cluster = React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,6px)',
      gap: 0,
      flex: 'none'
    }
  }, [1, 0, 1, 0, 1, 0, 1, 0, 1].map((on, i) => React.createElement('div', {
    key: i,
    style: {
      width: 6,
      height: 6,
      background: on ? 'var(--xd-ink)' : 'transparent'
    }
  })));
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, React.createElement('div', {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--xd-hairline-strong)'
    }
  }), cluster, React.createElement('div', {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--xd-hairline-strong)'
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Divider.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function Quote({
  quote,
  attribution
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--xd-panel)',
      borderRadius: 6,
      padding: '36px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'Bytesized,monospace',
      fontSize: 44,
      lineHeight: 1,
      color: '#8fa0e0',
      opacity: .7
    }
  }, '"'), React.createElement('div', {
    style: {
      font: '500 20px/1.5 Figtree',
      color: 'var(--xd-ink)'
    }
  }, quote), attribution && React.createElement('div', {
    style: {
      font: '600 12px Figtree',
      letterSpacing: '.03em',
      color: 'var(--xd-grey)'
    }
  }, `— ${attribution}`));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  sweep
}) {
  const valueStyle = sweep ? {
    fontFamily: 'Bytesized,monospace',
    fontSize: 40,
    background: 'var(--sweep-gradient)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent'
  } : {
    fontFamily: 'Bytesized,monospace',
    fontSize: 40,
    color: 'var(--xd-ink)'
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, React.createElement('div', {
    style: valueStyle
  }, value), React.createElement('div', {
    style: {
      font: '500 13px Figtree',
      color: 'var(--xd-grey)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled,
  style
}) {
  const pad = size === 'sm' ? '10px 20px' : size === 'lg' ? '17px 34px' : '14px 29px';
  const fontSize = size === 'sm' ? 13 : size === 'lg' ? 16 : 15;
  if (variant === 'ghost') {
    return React.createElement('button', {
      onClick,
      disabled,
      style: {
        position: 'relative',
        background: 'none',
        border: 'none',
        color: 'var(--xd-ink)',
        font: `600 ${fontSize}px Figtree,sans-serif`,
        cursor: disabled ? 'default' : 'pointer',
        padding: '6px 2px',
        opacity: disabled ? 0.5 : 1,
        ...style
      },
      className: 'xd-btn-ghost'
    }, children, React.createElement('span', {
      style: {
        position: 'absolute',
        left: 2,
        right: 2,
        bottom: 2,
        height: 2,
        background: 'rgba(19,24,38,.2)'
      }
    }), React.createElement('span', {
      className: 'xd-btn-ghost-sweep',
      style: {
        position: 'absolute',
        left: 2,
        right: 2,
        bottom: 2,
        height: 2,
        background: 'var(--sweep-gradient)',
        transform: 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform .3s ease'
      }
    }));
  }
  if (variant === 'secondary') {
    return React.createElement('button', {
      onClick,
      disabled,
      style: {
        position: 'relative',
        background: 'var(--xd-tan)',
        color: 'var(--xd-ink)',
        border: '1.5px solid var(--xd-ink)',
        borderRadius: 6,
        padding: pad,
        font: `600 ${fontSize}px Figtree,sans-serif`,
        letterSpacing: '.01em',
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        ...style
      }
    }, children);
  }
  return React.createElement('button', {
    onClick,
    disabled,
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--xd-ink)',
      color: 'var(--xd-tan)',
      border: '1px solid var(--xd-ink)',
      boxSizing: 'border-box',
      borderRadius: 6,
      padding: pad,
      font: `600 ${fontSize}px Figtree,sans-serif`,
      letterSpacing: '.01em',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      inset: -1,
      borderRadius: 'inherit',
      background: 'var(--sweep-gradient)',
      opacity: 0,
      transition: 'opacity .35s ease'
    },
    className: 'xd-btn-sweep'
  }), React.createElement('span', {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label
}) {
  const box = React.createElement('input', {
    type: 'checkbox',
    checked,
    defaultChecked,
    onChange,
    style: {
      appearance: 'none',
      width: 20,
      height: 20,
      border: '1.5px solid var(--xd-ink)',
      borderRadius: 4,
      background: 'var(--xd-tan)',
      position: 'relative',
      cursor: 'pointer',
      flex: 'none'
    },
    className: 'xd-checkbox'
  });
  if (!label) return box;
  return React.createElement('label', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer'
    }
  }, box, React.createElement('span', {
    style: {
      font: '500 14px Figtree,sans-serif',
      color: 'var(--xd-ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  style
}) {
  return React.createElement('input', {
    type,
    placeholder,
    value,
    onChange,
    className: 'xd-input',
    style: {
      font: '500 14px Figtree,sans-serif',
      color: 'var(--xd-ink)',
      background: 'var(--xd-panel)',
      border: '1.5px solid rgba(19,24,38,.2)',
      borderRadius: 6,
      padding: '12px 14px',
      outline: 'none',
      width: '100%',
      boxSizing: 'border-box',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function Textarea({
  placeholder,
  rows = 4,
  value,
  onChange,
  style
}) {
  return React.createElement('textarea', {
    placeholder,
    rows,
    value,
    onChange,
    className: 'xd-textarea',
    style: {
      font: '500 14px Figtree,sans-serif',
      color: 'var(--xd-ink)',
      background: 'var(--xd-panel)',
      border: '1.5px solid rgba(19,24,38,.2)',
      borderRadius: 6,
      padding: '12px 14px',
      outline: 'none',
      resize: 'vertical',
      width: '100%',
      boxSizing: 'border-box',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function Toggle({
  checked,
  defaultChecked,
  onChange,
  label
}) {
  const el = React.createElement('input', {
    type: 'checkbox',
    checked,
    defaultChecked,
    onChange,
    className: 'xd-toggle',
    style: {
      appearance: 'none',
      width: 44,
      height: 24,
      borderRadius: 12,
      background: 'rgba(19,24,38,.2)',
      position: 'relative',
      cursor: 'pointer',
      flex: 'none',
      transition: 'background .25s ease'
    }
  });
  if (!label) return el;
  return React.createElement('label', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer'
    }
  }, el, React.createElement('span', {
    style: {
      font: '500 14px Figtree,sans-serif',
      color: 'var(--xd-ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ChatDialog.jsx
try { (() => {
const {
  useState
} = React;
function ChatDialog({
  title = 'Ask Xperiens',
  messages
}) {
  const [text, setText] = useState('');
  return React.createElement('div', {
    style: {
      background: 'var(--xd-panel)',
      borderRadius: 6,
      maxWidth: 560,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      padding: '18px 22px',
      borderBottom: '1px solid rgba(19,24,38,.1)',
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'Bytesized,monospace',
      fontSize: 18,
      color: 'var(--xd-ink)'
    }
  }, 'x.d'), React.createElement('div', {
    style: {
      font: '700 14px Figtree',
      color: 'var(--xd-ink)'
    }
  }, title)), React.createElement('div', {
    style: {
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      minHeight: 200
    }
  }, messages.map((m, i) => React.createElement('div', {
    key: i,
    style: {
      maxWidth: '78%',
      padding: '12px 16px',
      borderRadius: 14,
      font: '400 14.5px/1.5 Figtree',
      alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
      background: m.from === 'user' ? '#8095dd' : 'var(--xd-ink)',
      color: m.from === 'user' ? 'var(--xd-ink)' : 'var(--xd-tan)',
      borderBottomLeftRadius: m.from === 'user' ? 14 : 4,
      borderBottomRightRadius: m.from === 'user' ? 4 : 14
    }
  }, m.text))), React.createElement('div', {
    style: {
      padding: '16px 22px',
      borderTop: '1px solid rgba(19,24,38,.1)',
      display: 'flex',
      gap: 10
    }
  }, React.createElement(__ds_scope.Input, {
    placeholder: 'Type a message…',
    value: text,
    onChange: e => setText(e.target.value),
    style: {
      flex: 1
    }
  }), React.createElement(__ds_scope.Button, {
    variant: 'primary',
    style: {
      padding: '12px 20px'
    }
  }, 'Send')));
}
Object.assign(__ds_scope, { ChatDialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ChatDialog.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CookieBanner.jsx
try { (() => {
function CookieBanner({
  onAccept,
  onDecline
}) {
  return React.createElement('div', {
    style: {
      maxWidth: 900,
      background: 'var(--xd-ink)',
      borderRadius: 6,
      padding: '22px 28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, React.createElement('div', {
    style: {
      font: '400 13.5px/1.5 Figtree',
      color: 'rgba(245,241,234,.75)',
      maxWidth: 520
    }
  }, 'We use cookies to improve your experience and understand site usage. See our ', React.createElement('a', {
    href: '#',
    style: {
      color: '#a9b6e8'
    }
  }, 'privacy policy'), ' for details.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12,
      flex: 'none'
    }
  }, React.createElement('button', {
    onClick: onDecline,
    style: {
      background: 'transparent',
      color: 'var(--xd-tan)',
      border: '1.5px solid rgba(245,241,234,.4)',
      borderRadius: 6,
      padding: '11px 22px',
      font: '600 15px Figtree',
      cursor: 'pointer'
    }
  }, 'Decline'), React.createElement(__ds_scope.Button, {
    variant: 'primary',
    onClick: onAccept,
    style: {
      background: 'var(--xd-tan)',
      color: 'var(--xd-ink)',
      borderColor: 'var(--xd-tan)'
    }
  }, 'Accept all')));
}
Object.assign(__ds_scope, { CookieBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CookieBanner.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FAQAccordion.jsx
try { (() => {
const {
  useState
} = React;
function FAQAccordion({
  items
}) {
  const [openIdx, setOpenIdx] = useState(0);
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map((item, i) => {
    const isOpen = openIdx === i;
    return React.createElement('div', {
      key: i,
      style: {
        borderBottom: '1px solid rgba(19,24,38,.12)'
      }
    }, React.createElement('div', {
      onClick: () => setOpenIdx(isOpen ? -1 : i),
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        cursor: 'pointer',
        padding: '20px 0'
      }
    }, React.createElement('div', {
      style: {
        font: '600 16px Figtree',
        color: 'var(--xd-ink)'
      }
    }, item.q), React.createElement('div', {
      style: {
        transition: 'transform .25s ease',
        transform: `rotate(${isOpen ? 180 : 0}deg)`
      }
    }, '⌄')), React.createElement('div', {
      style: {
        overflow: 'hidden',
        transition: 'max-height .3s ease,opacity .25s ease',
        maxHeight: isOpen ? 200 : 0,
        opacity: isOpen ? 1 : 0
      }
    }, React.createElement('div', {
      style: {
        font: '400 14.5px/1.6 Figtree',
        color: 'var(--xd-grey)',
        paddingBottom: 20
      }
    }, item.a)));
  }));
}
Object.assign(__ds_scope, { FAQAccordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FAQAccordion.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Hero.jsx
try { (() => {
const gradients = {
  discover: 'radial-gradient(140% 120% at 50% 100%, #f9e9c9 0%, #f2b8b6 32%, #a9b6e8 68%, #8095dd 100%)',
  govern: 'linear-gradient(125deg, #c9b8ec 0%, #e3d3f0 40%, #d7ecdf 68%, #a8e0c8 100%)',
  transform: 'radial-gradient(90% 90% at 82% 12%, #fbead0 0%, #f3c896 35%, #8fa0e0 66%, #6f85d6 100%)',
  enable: 'linear-gradient(180deg, #a8e0c8 0%, #cfe9d9 32%, #f7dcae 55%, #f0a8ad 78%, #e88a92 100%)'
};
function Hero({
  variant = 'centered',
  service = 'discover',
  heading,
  body,
  primaryCta = 'Book a diagnostic',
  secondaryCta = 'See our work',
  onPrimary,
  onSecondary
}) {
  if (variant === 'split') {
    return React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderRadius: 6,
        overflow: 'hidden',
        background: 'var(--xd-panel)'
      }
    }, React.createElement('div', {
      style: {
        padding: '64px 48px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 18
      }
    }, React.createElement('div', {
      style: {
        font: '700 36px/1.2 Figtree',
        color: 'var(--xd-ink)'
      }
    }, heading), React.createElement('div', {
      style: {
        font: '400 16px/1.6 Figtree',
        color: 'var(--xd-grey)'
      }
    }, body), React.createElement(__ds_scope.Button, {
      variant: 'primary',
      onClick: onPrimary,
      style: {
        width: 'fit-content'
      }
    }, primaryCta)), React.createElement('div', {
      style: {
        minHeight: 300,
        background: gradients[service],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--xd-ink)',
        font: '600 12px Figtree',
        letterSpacing: '.05em',
        opacity: .6
      }
    }, 'MEDIA SLOT'));
  }
  return React.createElement('div', {
    style: {
      position: 'relative',
      borderRadius: 6,
      overflow: 'hidden',
      padding: '100px 40px',
      textAlign: 'center',
      background: gradients[service]
    }
  }, React.createElement('div', {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      maxWidth: 640,
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      font: '700 46px/1.15 Figtree',
      color: 'var(--xd-ink)'
    }
  }, heading), React.createElement('div', {
    style: {
      font: '400 17px/1.6 Figtree',
      color: 'var(--xd-ink)',
      opacity: .85
    }
  }, body), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16,
      marginTop: 8
    }
  }, React.createElement(__ds_scope.Button, {
    variant: 'primary',
    onClick: onPrimary
  }, primaryCta), React.createElement(__ds_scope.Button, {
    variant: 'secondary',
    onClick: onSecondary
  }, secondaryCta))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoStrip.jsx
try { (() => {
function LogoStrip({
  names
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 44,
      flexWrap: 'wrap',
      opacity: .55
    }
  }, names.map(n => React.createElement('div', {
    key: n,
    style: {
      font: '700 20px Figtree',
      color: 'var(--xd-ink)'
    }
  }, n)));
}
Object.assign(__ds_scope, { LogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoStrip.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingCard.jsx
try { (() => {
function PricingCard({
  tier,
  price,
  suffix,
  description,
  cta = 'Choose plan',
  featured,
  onCta
}) {
  const dark = !!featured;
  return React.createElement('div', {
    style: {
      position: 'relative',
      background: dark ? 'var(--xd-ink)' : 'var(--xd-panel)',
      borderRadius: 6,
      padding: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, featured && React.createElement('div', {
    style: {
      position: 'absolute',
      top: -11,
      left: 32,
      background: '#6f85d6',
      color: 'var(--xd-tan)',
      font: '700 10px Figtree',
      letterSpacing: '.05em',
      padding: '4px 10px',
      borderRadius: 4
    }
  }, 'MOST POPULAR'), React.createElement('div', {
    style: {
      font: '700 13px Figtree',
      letterSpacing: '.04em',
      color: dark ? 'rgba(245,241,234,.6)' : 'var(--xd-grey)'
    }
  }, tier), React.createElement('div', {
    style: {
      font: '700 34px Figtree',
      color: dark ? 'var(--xd-tan)' : 'var(--xd-ink)'
    }
  }, price, suffix && React.createElement('span', {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: dark ? 'rgba(245,241,234,.6)' : 'var(--xd-grey)'
    }
  }, suffix)), React.createElement('div', {
    style: {
      font: '400 13.5px/1.5 Figtree',
      color: dark ? 'rgba(245,241,234,.7)' : 'var(--xd-grey)'
    }
  }, description), React.createElement('button', {
    onClick: onCta,
    style: {
      background: dark ? 'var(--xd-ink)' : 'var(--xd-tan)',
      color: dark ? 'var(--xd-tan)' : 'var(--xd-ink)',
      border: '1.5px solid ' + (dark ? 'var(--xd-tan)' : 'var(--xd-ink)'),
      borderRadius: 6,
      padding: '13.5px 28.5px',
      font: '600 15px Figtree',
      cursor: 'pointer'
    }
  }, cta));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PromoBanner.jsx
try { (() => {
const gradients = {
  discover: 'radial-gradient(120% 140% at 15% 100%, #f9e9c9 0%, #f2b8b6 35%, #a9b6e8 68%, #8095dd 100%)',
  enable: 'linear-gradient(180deg, #a8e0c8 0%, #cfe9d9 32%, #f7dcae 55%, #f0a8ad 78%, #e88a92 100%)'
};
function PromoBanner({
  variant = 'full',
  service = 'discover',
  heading,
  body,
  cta = 'Get started',
  onCta
}) {
  if (variant === 'rail') {
    return React.createElement('div', {
      style: {
        width: 280,
        borderRadius: 6,
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        background: gradients[service]
      }
    }, React.createElement('div', {
      style: {
        font: '700 18px/1.3 Figtree',
        color: 'var(--xd-ink)'
      }
    }, heading), body && React.createElement('div', {
      style: {
        font: '400 13px/1.5 Figtree',
        color: 'var(--xd-ink)',
        opacity: .8
      }
    }, body), React.createElement(__ds_scope.Button, {
      variant: 'secondary',
      onClick: onCta,
      style: {
        width: '100%'
      }
    }, cta));
  }
  return React.createElement('div', {
    style: {
      borderRadius: 6,
      padding: '36px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      background: gradients[service]
    }
  }, React.createElement('div', {
    style: {
      font: '700 22px/1.3 Figtree',
      color: 'var(--xd-ink)'
    }
  }, heading), React.createElement(__ds_scope.Button, {
    variant: 'primary',
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { PromoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PromoBanner.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceTile.jsx
try { (() => {
const icons = {
  discover: '../../assets/icons/discover.svg',
  govern: '../../assets/icons/govern.svg',
  transform: '../../assets/icons/transform.svg',
  enable: '../../assets/icons/enable.svg'
};
const gradients = {
  discover: 'radial-gradient(120% 90% at 50% 100%, #f9e9c9 0%, #f2b8b6 32%, #a9b6e8 68%, #8095dd 100%)',
  govern: 'linear-gradient(125deg, #c9b8ec 0%, #e3d3f0 35%, #d7ecdf 65%, #a8e0c8 100%)',
  transform: 'radial-gradient(60% 60% at 82% 12%, #fbead0 0%, #f3c896 30%, #8fa0e0 62%, #6f85d6 100%)',
  enable: 'linear-gradient(180deg, #a8e0c8 0%, #cfe9d9 30%, #f7dcae 55%, #f0a8ad 80%, #e88a92 100%)'
};
function ServiceTile({
  service,
  label,
  sub,
  iconSrc
}) {
  return React.createElement('div', {
    style: {
      position: 'relative',
      width: 280,
      height: 280,
      borderRadius: 4,
      overflow: 'hidden',
      background: gradients[service]
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      width: 60,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('img', {
    src: iconSrc || icons[service],
    width: 52,
    height: 52
  })), React.createElement('div', {
    style: {
      position: 'absolute',
      left: 16,
      bottom: 14,
      right: 16
    }
  }, React.createElement('div', {
    style: {
      font: '700 15px Figtree',
      color: 'var(--xd-ink)',
      letterSpacing: '.02em'
    }
  }, label), React.createElement('div', {
    style: {
      font: '600 10px Figtree',
      color: 'var(--xd-grey)',
      letterSpacing: '.03em',
      marginTop: 9
    }
  }, sub)));
}
Object.assign(__ds_scope, { ServiceTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceTile.jsx", error: String((e && e.message) || e) }); }

// components/marketing/VideoBlock.jsx
try { (() => {
function VideoBlock({
  title,
  duration = '0:00',
  onPlay
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      maxWidth: 760
    }
  }, React.createElement('div', {
    style: {
      position: 'relative',
      borderRadius: 6,
      overflow: 'hidden',
      aspectRatio: '16/9',
      background: 'linear-gradient(125deg,#131826,#3d4a6b)'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, React.createElement('div', {
    onClick: onPlay,
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--xd-tan)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, React.createElement('svg', {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24'
  }, React.createElement('path', {
    d: 'M8 5v14l11-7z',
    fill: 'var(--xd-ink)'
  })))), React.createElement('div', {
    style: {
      position: 'absolute',
      left: 20,
      bottom: 16,
      font: '600 12px Figtree',
      letterSpacing: '.04em',
      color: 'var(--xd-tan)',
      opacity: .8
    }
  }, duration)), React.createElement('div', {
    style: {
      font: '700 17px Figtree',
      color: 'var(--xd-ink)'
    }
  }, title));
}
Object.assign(__ds_scope, { VideoBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/VideoBlock.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  tagline = 'Transformation advisory, governance and execution.'
}) {
  const col = (title, items) => React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, React.createElement('div', {
    style: {
      font: '700 12px Figtree',
      letterSpacing: '.05em',
      color: 'var(--xd-tan)',
      marginBottom: 4
    }
  }, title), items.map(i => React.createElement('a', {
    key: i,
    href: '#',
    style: {
      font: '400 13px Figtree',
      color: 'rgba(245,241,234,.65)',
      textDecoration: 'none'
    }
  }, i)));
  return React.createElement('div', {
    style: {
      background: 'var(--xd-ink)',
      borderRadius: 6,
      padding: '48px 40px',
      display: 'flex',
      flexDirection: 'column',
      gap: 36
    }
  }, React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 28
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'Bytesized,monospace',
      fontSize: 26,
      color: 'var(--xd-tan)'
    }
  }, 'x.d'), React.createElement('div', {
    style: {
      font: '400 13px/1.6 Figtree',
      color: 'rgba(245,241,234,.6)',
      maxWidth: 220
    }
  }, tagline)), col('Services', ['Discover', 'Govern', 'Transform', 'Enable']), col('Company', ['About', 'Case studies', 'Careers', 'Contact']), col('Legal', ['Privacy policy', 'Terms'])), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      borderTop: '1px solid rgba(255,255,255,.12)',
      paddingTop: 24
    }
  }, React.createElement('div', {
    style: {
      font: '500 12px Figtree',
      color: 'rgba(245,241,234,.5)'
    }
  }, `© ${new Date().getFullYear()} Xperiens Digital. All rights reserved.`), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16
    }
  }, ['LinkedIn', 'X'].map(s => React.createElement('a', {
    key: s,
    href: '#',
    style: {
      font: '500 12px Figtree',
      color: 'rgba(245,241,234,.65)',
      textDecoration: 'none'
    }
  }, s)))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
const {
  useState
} = React;
function Navbar({
  links = ['Discover', 'Govern', 'Transform', 'Enable', 'About'],
  ctaLabel = 'Book a call',
  onCta
}) {
  const [open, setOpen] = useState(false);
  return React.createElement('div', {
    style: {
      position: 'relative',
      background: 'var(--xd-tan)',
      borderRadius: 6,
      overflow: 'hidden'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'Bytesized,monospace',
      fontSize: 24,
      color: 'var(--xd-ink)'
    }
  }, 'x.d'), React.createElement('div', {
    className: 'xd-nav-links',
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 28
    }
  }, links.map(l => React.createElement(__ds_scope.Button, {
    key: l,
    variant: 'ghost'
  }, l))), React.createElement('div', {
    className: 'xd-nav-cta'
  }, React.createElement(__ds_scope.Button, {
    variant: 'primary',
    onClick: onCta
  }, ctaLabel)), React.createElement('button', {
    className: 'xd-nav-burger',
    onClick: () => setOpen(true),
    'aria-label': 'Open menu',
    style: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      flexDirection: 'column',
      gap: 5,
      padding: 8
    }
  }, [0, 1, 2].map(i => React.createElement('span', {
    key: i,
    style: {
      width: 22,
      height: 2,
      background: 'var(--xd-ink)',
      display: 'block'
    }
  })))), React.createElement('div', {
    style: {
      position: 'absolute',
      inset: 0,
      background: `rgba(19,24,38,${open ? .5 : 0})`,
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'auto' : 'none',
      transition: 'opacity .35s ease',
      zIndex: 5
    },
    onClick: () => setOpen(false)
  }), React.createElement('div', {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: '70%',
      background: 'var(--xd-ink)',
      transform: `translateX(${open ? '0%' : '-100%'})`,
      transition: 'transform .35s cubic-bezier(.4,0,.2,1)',
      zIndex: 6,
      display: 'flex',
      flexDirection: 'column',
      padding: '28px 28px 0'
    }
  }, links.map(l => React.createElement('a', {
    key: l,
    href: '#',
    style: {
      font: '600 20px Figtree',
      color: 'var(--xd-tan)',
      textDecoration: 'none',
      padding: '14px 0',
      borderBottom: '1px solid rgba(255,255,255,.12)'
    }
  }, l))));
}
Object.assign(__ds_scope, { Navbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/MarketingSite.jsx
try { (() => {
const {
  useState
} = React;
const {
  Navbar,
  Footer,
  Hero,
  ServiceTile,
  Quote,
  LogoStrip,
  PricingCard,
  StatBlock,
  FAQAccordion,
  Card,
  Input,
  Textarea,
  Checkbox,
  Button,
  CookieBanner
} = window.XperiensDigitalDesignSystem_ecf547;
const services = [{
  service: 'discover',
  label: 'DISCOVER',
  sub: 'AI VALUE & TRANSFORMATION DIAGNOSTIC'
}, {
  service: 'govern',
  label: 'GOVERN',
  sub: 'RESPONSIBLE AI GOVERNANCE ADVISORY'
}, {
  service: 'transform',
  label: 'TRANSFORM',
  sub: 'DIGITAL TRANSFORMATION PROGRAM MANAGEMENT'
}, {
  service: 'enable',
  label: 'ENABLE',
  sub: 'MICROSOFT AI BUSINESS SOLUTIONS'
}];
function MarketingSite() {
  const [showCookie, setShowCookie] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  return React.createElement('div', {
    style: {
      background: 'var(--xd-tan)',
      minHeight: '100vh',
      fontFamily: 'Figtree,sans-serif'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '24px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 64
    }
  }, React.createElement(Navbar, null), React.createElement(Hero, {
    variant: 'centered',
    service: 'discover',
    heading: 'AI transformation, governed and delivered',
    body: 'Xperiens Digital helps enterprises find AI value, govern it responsibly, and put it into production.',
    onPrimary: () => alert('Booking flow — prototype only')
  }), React.createElement('div', null, React.createElement('div', {
    style: {
      font: '700 32px/1.15 Figtree',
      color: 'var(--xd-ink)',
      marginBottom: 24
    }
  }, 'Four ways we help'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 20
    }
  }, services.map(s => React.createElement(ServiceTile, {
    key: s.service,
    ...s
  })))), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, React.createElement(StatBlock, {
    value: '40%',
    label: 'Reduction in model risk review time',
    sweep: true
  }), React.createElement(StatBlock, {
    value: '120+',
    label: 'AI use cases assessed'
  }), React.createElement(StatBlock, {
    value: '18',
    label: 'Enterprise clients advised'
  }), React.createElement(StatBlock, {
    value: '3 wks',
    label: 'Average time to roadmap'
  })), React.createElement(Quote, {
    quote: "Xperiens gave us a governance model we could actually run, not a slide deck we'd shelve.",
    attribution: 'CTO, ENTERPRISE CLIENT'
  }), React.createElement('div', null, React.createElement('div', {
    style: {
      font: '600 11px Figtree',
      letterSpacing: '.05em',
      color: 'var(--xd-grey)',
      marginBottom: 14
    }
  }, 'TRUSTED BY'), React.createElement(LogoStrip, {
    names: ['ACME CORP', 'NORTHWIND', 'MERIDIAN', 'VELTRIX', 'HALCYON']
  })), React.createElement('div', null, React.createElement('div', {
    style: {
      font: '700 32px/1.15 Figtree',
      color: 'var(--xd-ink)',
      marginBottom: 24,
      textAlign: 'center'
    }
  }, 'Engagement plans'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, React.createElement(PricingCard, {
    tier: 'DIAGNOSTIC',
    price: '$18k',
    description: 'A focused two-week AI value assessment.'
  }), React.createElement(PricingCard, {
    tier: 'ADVISORY',
    price: '$6.5k',
    suffix: '/mo',
    description: 'Ongoing governance advisory and roadmap delivery.',
    featured: true
  }), React.createElement(PricingCard, {
    tier: 'ENTERPRISE',
    price: 'Custom',
    description: 'Full transformation programme, scoped to your org.',
    cta: 'Talk to us'
  }))), React.createElement('div', null, React.createElement('div', {
    style: {
      font: '700 28px/1.2 Figtree',
      color: 'var(--xd-ink)',
      marginBottom: 8
    }
  }, 'Frequently asked'), React.createElement(FAQAccordion, {
    items: [{
      q: 'How long does a Discover engagement take?',
      a: 'Typically two to three weeks from kickoff to a board-ready findings deck.'
    }, {
      q: 'Do you work with regulated industries?',
      a: 'Yes — our governance frameworks are built with financial services and public sector clients in mind.'
    }, {
      q: 'Can you run Transform and Enable in parallel?',
      a: 'In most cases, yes. We sequence workstreams so implementation starts once governance guardrails are in place.'
    }]
  })), React.createElement(Card, {
    padding: 36,
    style: {
      maxWidth: 460
    }
  }, submitted ? React.createElement('div', {
    style: {
      font: '600 16px Figtree',
      color: 'var(--xd-ink)'
    }
  }, 'Thanks — we\u2019ll be in touch shortly.') : React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, React.createElement('div', {
    style: {
      font: '700 20px Figtree',
      color: 'var(--xd-ink)'
    }
  }, 'Request a callback'), React.createElement(Input, {
    placeholder: 'Full name'
  }), React.createElement(Input, {
    type: 'email',
    placeholder: 'Work email'
  }), React.createElement(Textarea, {
    rows: 4,
    placeholder: 'Tell us about your AI initiative'
  }), React.createElement(Checkbox, {
    label: 'I agree to be contacted about this enquiry'
  }), React.createElement(Button, {
    variant: 'primary',
    style: {
      width: '100%'
    },
    onClick: () => setSubmitted(true)
  }, 'Submit'))), React.createElement(Footer, null)), showCookie && React.createElement('div', {
    style: {
      position: 'fixed',
      left: 24,
      right: 24,
      bottom: 24,
      display: 'flex',
      justifyContent: 'center'
    }
  }, React.createElement(CookieBanner, {
    onAccept: () => setShowCookie(false),
    onDecline: () => setShowCookie(false)
  })));
}
window.MarketingSite = MarketingSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/MarketingSite.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.ChatDialog = __ds_scope.ChatDialog;

__ds_ns.CookieBanner = __ds_scope.CookieBanner;

__ds_ns.FAQAccordion = __ds_scope.FAQAccordion;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.LogoStrip = __ds_scope.LogoStrip;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.PromoBanner = __ds_scope.PromoBanner;

__ds_ns.ServiceTile = __ds_scope.ServiceTile;

__ds_ns.VideoBlock = __ds_scope.VideoBlock;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Navbar = __ds_scope.Navbar;

})();
