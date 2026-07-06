import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Logo from './assets/logo.jpg'
import Vaction from './assets/v-action.png'
import Vrespect from './assets/v-respect.png'
import Vconsistency from './assets/v-consistency.png'
import Vresponsibility from './assets/v-responsibility.png'
import Vtogetherness from './assets/v-togetherness.png'
import location from './assets/location.png'
import garbage from './assets/garbage.png'
import community from './assets/community.png'
import heroMission from './assets/hero_mission.png'
import bulb from './assets/bulb.png'
import up from './assets/up.png'
import gallery from './assets/gallery.png'
import team from './assets/team.png'
import road from './assets/road.png'
import l2 from './assets/l2.png'
import t2 from './assets/t2.png'
import r2 from './assets/r2.png'
import person from './assets/person.png'
import tick from './assets/tick.png'
import heart from './assets/heart.png'
import handshake from './assets/handshake.png'
import empty from './assets/empty.png'
import her from './assets/her.png' 
import serve from './assets/service.png' 
import com from './assets/com.png' 
import edu from './assets/edu.png' 
import env from './assets/env.png' 
import well from './assets/well.png' 
import naman from './assets/naman.png'
import aadi from './assets/aadi.png'
import anjali from './assets/anjali.png'
import bhanushi from './assets/bhanushi.jpg'
import anuj from './assets/anuj.png'
import insta from './assets/insta.png'
import x from './assets/x.png'
import email from './assets/email.png' 
import file from './assets/file.svg'
import qr from './assets/qr.png'

function App() {
  var [face,setface]=useState('home')
  return (
    <>
   <section id='navbar'>
    <img id='logo' src={Logo}></img>
    <div id='links'>
      <a href='#' style={face=='home'?{color:'#e57302'}:null} onClick={()=>{setface('home')}}>Home</a>
      <a href='#' style={face=='mission'?{color:'#e57302'}:null} onClick={()=>{setface('mission')}}>Our Mission</a>
      <a href='#' style={face=='team'?{color:'#e57302'}:null}  onClick={()=>{setface('team')}}>Team</a>
      <button id='joinus' href='#' onClick={()=>{setface('join')}}>Join Us </button>
    </div>
   </section>
   {face=='home'?<><section id='front'>
    <div id='content'>
       <div id="slogan">
    <h1 style={{ color: '#e57302' }}>Restore,</h1>
    <h1 style={{ color: 'white' }}>Rebuild,</h1>
    <h1 style={{ color: 'green' }}>Rise</h1>
      <p>A youth-led movement restoring communities, nurturing values, and inspiring responsible citizenship across India.</p>
   <dov id='buttonsfront'>
    <button onClick={()=>{setface('join')}} id='joinus2'>Become a memeber</button>
    <button id='lm' onClick={()=>{window.open('https://docs.google.com/document/d/1bdbfqw6GVR_HvTUVwd34MU4Tc79LzpfdC4UP8fArki0/export?format=pdf')}}>Learn More</button>
   </dov>
  </div>
    </div>
   </section>
   <section id='values'>
     <h1 id='stitle'>Our <span style={{color:'#e57302'}}>Values</span></h1>
     <div id='vlist'>
      <div id='v'>
        <img src={edu}></img>
        <p>Empowering young minds through knowledge, guidance, and opportunity.</p>
      </div>
        <div id='v'>
        <img src={com}></img>
        <p>Building stronger, united communities through compassion and collective action.</p>
      </div>
        <div id='v'>
        <img src={env}></img>
        <p>Protecting nature and creating cleaner, healthier communities.</p>
      </div>
        <div id='v'>
        <img src={her}></img>
        <p>Preserving India’s rich culture, traditions, and historical legacy for future generations.</p>
      </div>
        <div id='v'>
        <img src={serve}></img>
        <p>Serving people with humility, kindness, and a commitment to meaningful change.</p>
      </div>
       <div id='v'>
        <img src={well}></img>
        <p>Promoting physical, mental, and emotional wellness through healthy living and mindfulness.</p>
      </div>
      
     </div>
   </section>
   <section id='impact'>
         <h1 id='ititle'>Our <span style={{color:'#e57302'}}>Impact</span> So far</h1>
          <div id='impacts'>
            <div id='i'>
              <img src={community}></img>
              <div id='i-in'>
                <h1>120+</h1>
                <p>Volunteers</p>
              </div>
            </div>
             <div id='i'>
              <img src={garbage}></img>
              <div id='i-in'>
                <h1>30+</h1>
                <p>Clean ups</p>
              </div>
            </div>
             <div id='i'>
              <img src={location}></img>
              <div id='i-in'>
                <h1>15+</h1>
                <p>Communities served</p>
              </div>
            </div>
          </div>
   </section></>:null}
   {face=='mission'?<>
   <section id='mission'>
    <div id='s2'>
      <h1 style={{color:'#e57302'}}>Why </h1>
      <h1>Revive India?</h1>
    </div>
   </section>
   <section id='msec'>
   <div id='left'>
     <h1 id='wants'>
      What do <span style={{color:'#446d13'}}>we want?</span>
    </h1>
    <div id='wlist'>
      <div id='w'>
        <img src={bulb}></img>
        <p>We want streets that people are proud to walk on</p>
      </div>
       <div id='w'>
        <img src={team}></img>
        <p>We want communities that care for their surroundings</p>
      </div>
       <div id='w'>
        <img src={road}></img>
        <p>We want citizens that don't wait for anyone else to do it for them </p>
      </div>
       <div id='w'>
        <img src={up}></img>
        <p>We want to inspire actin not converzations</p>
      </div>
    </div>
   </div>
   <div id='right'>
         <h1 id='wants'>
      Why <span style={{color:'#e57302'}}>Revive India?</span>
    </h1>
    <p id='mdis'>Because change does not come from a government alone, it come from people </p>
     <div id='wlist'>
      <div id='w'>
        <img src={person}></img>
        <p>One person</p>
      </div>
       <div id='w'>
        <img src={r2}></img>
        <p>One Street</p>
      </div>
       <div id='w'>
        <img src={t2}></img>
        <p>One Community </p>
      </div>
       <div id='w'>
        <img src={l2}></img>
        <p>One Nation</p>
      </div>
    </div>
   </div>
   
      </section>
      <section id='promise'>
        <h1 id='ptitle'>
          Our <span style={{color:'#e57302'}}> Promsie</span>
        </h1>
        <div id='plist'>
          <div id='p'>
            <img src={heart}></img>
            <p>We will respect every community we work with.</p>
          </div>
            <div id='p'>
            <img src={handshake}></img>
            <p>Wel lead by an example</p>
          </div>
            <div id='p'>
            <img src={tick}></img>
            <p>We will act with honesty , consistency and purpose.</p>
          </div>
        </div>
      </section>
      <section id='gallery'>
        <h1 id='gtitle'>Gallery</h1>
        <div id='glist'>
          <img src={gallery}></img>
          <img src={gallery}></img>
          <img src={gallery}></img>
          <img src={gallery}></img>
          <img src={gallery}></img>
          <img src={gallery}></img>
        </div>
            <button style={{width:200}} id='lm'>Become a volunteer</button>

                </section>

   </>:null}
   {face=='team'?<>
   <section id='team'>
    <h1 id='ts'>Meet the <span style={{color:'#e57302'}}>team</span></h1>
    <div id='tlist'>
      <div id='t'>
 <img src={anuj}></img>
 <div id='creds'><h1 id='name'>Anuj Rajput</h1>
 <h3 id='role'>Head of Operations</h3>
 </div>
      </div>
        <div id='t'>
 <img src={aadi}></img>
 <div id='creds'><h1 id='name'>Aditya Singh Rana</h1>
 <h3 id='role'>Youth Leader</h3>
 </div>
      </div>
        <div id='t'>
 <img src={naman}></img>
 <div id='creds'><h1 id='name'>Naman Panchal</h1>
 <h3 id='role'>Media Director</h3>
 </div>
      </div>
      
      
    </div>
     <div id='tlist'>
      <div id='t'>
 <img src={anjali}></img>
 <div id='creds'><h1 id='name'>Anjali Dahima</h1>
 <h3 id='role'>Director of Social Impact</h3>
 </div>
      </div>
        <div id='t'>
 <img src={bhanushi}></img>
 <div id='creds'><h1 id='name'>Bhanushi Rana</h1>
 <h3 id='role'>Volunteer Management</h3>
 </div>
      </div>
      
      
    </div>
   </section>
   </>:null}
   {face=='join'?<>
   <section id='form'>
  <div id='pre'>
      <h1 id='ft'>
      Join 
    </h1>
    <h1 id='ft' style={{color:'#e57302'}}>the movement</h1>
    <p>Be the part of the change, your small contribution can make a big change</p>
    <button onClick={()=>{window.open('https://docs.google.com/document/d/1bdbfqw6GVR_HvTUVwd34MU4Tc79LzpfdC4UP8fArki0/export?format=pdf')}} id='change'>Read the manifesto</button>
    <div id='donate'>
      <img src={qr}></img>
      <h1 id='text'>Every donation, no matter the size, helps us continue our work and reach more people in need. Your generosity enables us to create meaningful change and build stronger communities</h1>
    </div>
  </div>
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf44m4LM81iWjebxYAAgXYns0FDQXSqrLF3fUK9I16w3mc17Q/viewform?embedded=true" width="640" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   </section>
   </>:null}
   <section id='footer'>
<div id='first'>
      <img id='fl' src={Logo}></img>
<div id='socials'>      <img onClick={()=>{window.open('https://www.instagram.com/reviveind')}} src={insta}></img>
 <img onClick={()=>{window.open('https://x.com/reviveIND')}} style={{  borderRadius: '30%'}} src={x}></img>
  <img onClick={()=>{window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ReviveIndiateam@gmail.com')}} src={email}></img>
</div>
  </div>  
  <div id='second'>
    <h1 id='copyright'>© 2026 Revive India. All Rights Reserved.</h1>
    </div> </section>
    </>
  )
}

export default App
