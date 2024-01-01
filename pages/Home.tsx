import { Typography, Grid, Modal, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faBilibili,
  faWeixin,
} from '@fortawesome/free-brands-svg-icons';
import BgImg from '/public/img/bg.jpg';
import WechatImg from '/public/img/wechat.png';

import React, { useState } from 'react';

import { useTrail, animated, useSpring } from 'react-spring';

function Home() {
  function SocialLinks({ animatedProps, ...props }) {
    const [open, setOpen] = useState(false);
    return (
      <animated.div className="social__links" style={animatedProps}>
        <Grid container spacing={3}>
          <Grid item>
            <Typography variant="h6" display={'inline'} gutterBottom>
              Social Media:
            </Typography>
          </Grid>
          <Grid item>
            <a href="https://github.com/calmound" className="color-blue">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://space.bilibili.com/101706573"
              className="color-blue"
            >
              <FontAwesomeIcon icon={faBilibili} size="xl" />
            </a>
          </Grid>
          <Grid item>
            <a
              href="javascript:void(0)"
              onClick={() => setOpen(true)}
              className="color-blue"
            >
              <FontAwesomeIcon icon={faWeixin} size="xl" />
            </a>
          </Grid>
        </Grid>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography component="div" id="modal-modal-title" variant="h6">
              微信号：sanmu1598
            </Typography>
            <Typography
              component="div"
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              sx={{ mt: 2 }}
            </Typography>
            <Typography
              variant="h1"
              id="modal-modal-description"
              sx={{ mt: 2 }}
            >
              <img src={WechatImg.src} />
            </Typography>
          </Box>
        </Modal>
      </animated.div>
    );
  }

  function Description() {
    const animatedHero = useSpring({
      opacity: 1,
      transform: 'translateX(0)',
      from: { opacity: 0, transform: 'translateX(8em)' },
      config: { mass: 2, tension: 260, friction: 30 },
      delay: 600,
    });
    const animatedTexts = useTrail(5, {
      from: { opacity: 0, transform: 'translateY(3em)' },
      to: { opacity: 1, transform: 'translateY(0)' },
      config: {
        mass: 3,
        friction: 45,
        tension: 460,
      },
      delay: 200,
    });

    return (
      <>
        <Grid container style={{ padding: '5%' }} className="hero">
          {/*Personal Intro */}
          <Grid item xs={12} lg={6} className="homeIntro">
            <animated.div style={animatedTexts[0]}>
              <Typography variant="h3" gutterBottom>
                你好! 我是 <span className="color-blue">三木</span>
                {/* <Typography variant="h1" variant="body2">
                <span>{siteConfig.tagline}</span>
              </Typography> */}
              </Typography>
            </animated.div>
            <animated.div style={animatedTexts[1]} className="mb-3">
              <Typography variant="body1">
                在这里我会分享各类技术栈所遇到问题与解决方案，带你了解最新的技术栈以及实际开发中如何应用，并希望我的开发经历对你有所启发。
              </Typography>
            </animated.div>
            <animated.div style={animatedTexts[2]}>
              <Typography variant="body1">
                你可以随处逛逛，查看
                <a
                  href="/docs/vue/01%20%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA"
                  className="color-blue"
                >
                  技术笔记
                </a>
              </Typography>
            </animated.div>
            &nbsp; &nbsp;
            <animated.div style={animatedTexts[3]}>
              <Typography variant="h6" gutterBottom>
                技能掌握:
              </Typography>
              <Typography variant="body1" gutterBottom>
                React, Vue, Node.js, Webpack, JavaScript, Python, Azure, etc.
              </Typography>
            </animated.div>
            &nbsp;
            <SocialLinks animatedProps={animatedTexts[4]} />
          </Grid>

          <Grid item xs={12} lg={6} className="homeImg">
            {/* <img src={useBaseUrl(image)} className="image" /> */}
            <animated.img src={BgImg.src} style={animatedHero} />
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <div className="home">
      <Description />
    </div>
  );
}

export default Home;
