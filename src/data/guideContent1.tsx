import React from 'react';
import { GuideSection } from './types';

export const guideContent1: GuideSection[] = [
  {
    id: "welcome-letter",
    title: "WELCOME LETTER",
    content: (
      <div className="space-y-4">
        <p>Dear Parents and Friends of the IDSS,</p>
        <p>We are delighted to welcome you to the Internationale Deutsche Schule Sarajevo for the 2026/2027 school year. Whether you are joining us for the first time or returning as part of our community, we are glad you are here.</p>
        <p>IDSS is a school built on high academic, ethical, and operational standards.. We are proud holders of the ISO 9001:2015 Quality Management certification and HACCP Food Safety certification, and in 2025 we were honoured with the Business Leader of Sustainable Development Award in the category People, a recognition of our commitment to the wellbeing and growth of every individual in our community.</p>
        <p>Our programme goes far beyond academic achievement. We nurture the whole child: intellectually curious, emotionally resilient, bilingual, and globally minded. We believe that a great school is built on trust, between teachers and students, and between the school and families. You are essential partners in your child's education, and this Guide is your practical companion for the year ahead.</p>
        <p>Please read every section carefully, discuss the key expectations with your child, and return the signed acknowledgement form to the school office within the first week of school.</p>
        <p>We look forward to a year of learning, growth, and shared achievement.</p>
        <p>Sincerely,</p>
        <div className="mt-8">
          <p className="mb-2" style={{ fontFamily: "'Brittany Signature', cursive", fontSize: '16px' }}>Davor Mulalic</p>
          <p className="font-bold">Davor Mulalic</p>
          <p className="text-gray-600 italic">Principal | IDSS Sarajevo | 2026</p>
        </div>
      </div>
    )
  },
  {
    id: "our-vision",
    title: "OUR VISION",
    content: (
      <div className="space-y-6">
        <p>IDSS aspires to be the school of choice for families who want more than a good education, they want an exceptional one. Our vision is to develop students who are:</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-center">
            <h4 className="font-bold text-blue-800 mb-2">Critical Thinkers</h4>
            <p className="text-sm">who question, analyse, and solve</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-center">
            <h4 className="font-bold text-blue-800 mb-2">Lifelong Learners</h4>
            <p className="text-sm">driven by curiosity and purpose</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-center">
            <h4 className="font-bold text-blue-800 mb-2">Bilingual Communicators</h4>
            <p className="text-sm">fluent in German, proficient in English</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 text-center">
            <h4 className="font-bold text-blue-800 mb-2">Global Citizens</h4>
            <p className="text-sm">compassionate, resilient, and responsible</p>
          </div>
        </div>
        <p>We envision a school that prioritises the whole child, ensuring individualised attention and support in academic, social-emotional, physical, and creative development. Learning at IDSS is hands-on, project-based, and collaborative. Our curriculum meets the highest standards of German education while celebrating the cultural richness of our diverse, international community.</p>
      </div>
    )
  },
  {
    id: "our-mission",
    title: "OUR MISSION",
    content: (
      <div className="space-y-6">
        <p>The mission of IDSS is to nurture every child's potential, cultivate a love of learning, and prepare students for success in a diverse and rapidly changing world. We pursue this mission through six interconnected commitments:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-bold text-yellow-600 mb-2">01 Safe & Inclusive Environment</h4>
            <p className="text-sm">Every student feels valued, respected, and empowered to learn, regardless of background, language, or ability.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-bold text-yellow-600 mb-2">02 Rigorous Academic Curriculum</h4>
            <p className="text-sm">Critical thinking, creativity, and problem-solving across all subjects, aligned to German federal education standards.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-bold text-yellow-600 mb-2">03 German Language & Culture</h4>
            <p className="text-sm">Deep immersion in German language, history, and culture through authentic experiences from the earliest age.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-bold text-yellow-600 mb-2">04 Character & Social Responsibility</h4>
            <p className="text-sm">Empathy, integrity, leadership, and global citizenship developed through community service and role modelling.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-bold text-yellow-600 mb-2">05 Bilingual Excellence</h4>
            <p className="text-sm">Fluency in German and proficiency in English, a proven foundation for cognitive development and future success.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-bold text-yellow-600 mb-2">06 Family Partnership</h4>
            <p className="text-sm">Active parent involvement through regular communication, meetings, curriculum updates, and school events.</p>
          </div>
        </div>
        <p>In everything we do, we are guided by three principles: quality without compromise, respect for every individual, and the belief that education is a partnership. Our ISO 9001:2015 certification reflects our institutional commitment to these principles, every process, every interaction, every meal is held to the highest standard.</p>
      </div>
    )
  },
  {
    id: "school-contacts",
    title: "SCHOOL CONTACTS",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-2">Internationale Deutsche Schule Sarajevo</h4>
            <p className="text-sm">Buka 13, 71 000 Sarajevo, BiH</p>
            <p className="text-sm">idss.edu.ba</p>
            <p className="text-sm">General: info@idss.ba</p>
            <p className="text-sm">Pedagogy: pedagogy@idss.ba</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            <h4 className="font-bold text-blue-800 mb-2">Phone (General)</h4>
            <p className="text-sm mb-2">+387 33 560 520</p>
            <h4 className="font-bold text-red-600 mb-1">EMERGENCY LINE, 24/7</h4>
            <p className="text-sm font-bold text-red-600 mb-2">+387 60 345 1275</p>
            <p className="text-sm italic">Use for: urgent safety concerns, last-minute pick-up changes, arrival outside gate hours.</p>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Staff Email Addresses</h3>
        <p>Every staff member holds a personal @idss.ba email address, shared with families at the start of the school year. You may contact administration, teachers, and support staff at any time.</p>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-2">
          <p>Response time: within 24 hours on weekdays.</p>
          <p>Emails sent on Friday or over the weekend will be answered on Monday.</p>
          <p>For matters that need more than a brief exchange, please email to schedule a meeting.</p>
          <p>Extended face-to-face conversations are always more effective than lengthy email threads.</p>
        </div>
      </div>
    )
  },
  {
    id: "communication-within-idss",
    title: "COMMUNICATION WITHIN IDSS",
    content: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-blue-800 mb-4">Who to Contact, Quick Reference</h3>
        <p>Please direct your question or concern to the person best placed to help. Going directly to the right contact saves time for everyone.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Topic</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Day-to-day classroom matters</td>
                <td className="border border-gray-200 px-4 py-2">Class teacher, email or scheduled meeting</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Absence notification</td>
                <td className="border border-gray-200 px-4 py-2">info@idss.ba AND class teacher (same day)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Academic progress & assessments</td>
                <td className="border border-gray-200 px-4 py-2">Class teacher, schedule a meeting</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Pedagogical concerns / curriculum</td>
                <td className="border border-gray-200 px-4 py-2">Head of Education, pedagogy@idss.ba</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Administrative matters, fees, documents</td>
                <td className="border border-gray-200 px-4 py-2">School Secretary, info@idss.ba</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Serious complaints or unresolved issues</td>
                <td className="border border-gray-200 px-4 py-2">Principal, schedule a meeting via email</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Last-minute pick-up / emergency</td>
                <td className="border border-gray-200 px-4 py-2">+387 60 345 1275 (call, do not email)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Communication Rules</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Do not visit teachers in their classrooms without a prior appointment. Teachers use this time to prepare lessons, review student work, and support individual students.</li>
          <li>Conversations expected to last more than 5 minutes must be scheduled by email in advance.</li>
          <li>All concerns must be raised through the appropriate channel above. Social media posts or group-chat complaints are not an appropriate substitute and are covered under the Parent Code of Conduct.</li>
        </ul>
      </div>
    )
  },
  {
    id: "school-secretary",
    title: "SCHOOL SECRETARY",
    content: (
      <div className="space-y-6">
        <p>The school secretary is based at the main gate throughout the school day. She is the first point of contact for arriving parents and manages visitor access, ensuring that only authorised individuals enter the school grounds. She can assist with policies, schedules, administrative queries, and general information.</p>
        
        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Secretary Consultation Hours</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 mb-4">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Day</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Hours</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Monday – Thursday</td>
                <td className="border border-gray-200 px-4 py-2">09:00 – 11:00 and 14:45 – 15:45</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Friday</td>
                <td className="border border-gray-200 px-4 py-2">09:00 – 11:00</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
          <p className="mb-2">Reachable by phone and email throughout the day:</p>
          <p className="font-semibold">+387 33 560 520 | info@idss.ba</p>
        </div>
      </div>
    )
  },
  {
    id: "parent-teacher-meetings",
    title: "PARENT–TEACHER MEETINGS",
    content: (
      <div className="space-y-4">
        <p>Formal parent–teacher meetings are held twice per year. Dates are communicated by email well in advance.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Autumn meeting</strong> (November), early-year progress, expectations, and any emerging concerns.</li>
          <li><strong>Spring meeting</strong> (April), second-semester progress and end-of-year outlook.</li>
        </ul>
        <p>Each slot is 15 minutes. If a topic requires more time, arrange a separate dedicated meeting directly with the teacher, do not attempt to extend the formal slot.</p>
      </div>
    )
  },
  {
    id: "curriculum-updates-newsletter",
    title: "CURRICULUM UPDATES & NEWSLETTER",
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Curriculum updates</strong> are sent by teachers several times per year. Each update outlines the subjects and topics currently being taught and suggests ways families can support learning at home.</li>
          <li><strong>School newsletters</strong> are issued twice per year, at the end of each semester, covering school life, student achievements, upcoming events, and community news.</li>
          <li>All communications are sent by email. Please ensure your contact details are up to date and that emails from idss.ba do not go to your spam folder.</li>
        </ul>
      </div>
    )
  },
  {
    id: "safety-first",
    title: "SAFETY FIRST",
    content: (
      <div className="space-y-6">
        <p>A safe environment is the foundation of everything we do at IDSS. Safety at our school is physical, emotional, digital, and operational, and it is everyone's shared responsibility. Our safety framework is embedded in our ISO 9001:2015 quality management system and reviewed continuously throughout the year.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-600 text-white p-4 rounded-lg">
            <h4 className="font-bold mb-1">EMERGENCY, 24/7</h4>
            <p className="font-bold text-xl mb-2">+387 60 345 1275</p>
            <p className="text-sm italic">Call immediately for any urgent safety concern.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold mb-1">General Enquiries</h4>
            <p className="mb-1">+387 33 560 520</p>
            <p>info@idss.ba</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold mb-1">Ambulance / Police / Fire</h4>
            <p className="mb-2">124 / 122 / 123</p>
            <p className="text-sm italic">IDSS staff will call on your behalf if needed.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Our Six Safety Pillars</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-4 font-semibold w-1/4 bg-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">🔒</span>
                    Access Control
                  </div>
                </td>
                <td className="border border-gray-200 px-4 py-4">The main gate is locked for most of the day. Entry is permitted only during designated drop-off and pick-up windows. All visitors must be authorised and are monitored by the school secretary.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-4 font-semibold w-1/4 bg-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">👩‍🏫</span>
                    Trained Staff
                  </div>
                </td>
                <td className="border border-gray-200 px-4 py-4">All staff are trained to identify and respond to safety concerns before they escalate. Emergency procedures are reviewed at the start of each school year.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-4 font-semibold w-1/4 bg-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">🚨</span>
                    Emergency Drills
                  </div>
                </td>
                <td className="border border-gray-200 px-4 py-4">Regular fire, evacuation, and lockdown drills are conducted throughout the year. Students and staff practise procedures so that responses are automatic and calm.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-4 font-semibold w-1/4 bg-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">💙</span>
                    Mental Health Support
                  </div>
                </td>
                <td className="border border-gray-200 px-4 py-4">Counselling and wellbeing support is available for students experiencing stress, anxiety, or personal difficulties. Staff are attentive to emotional as well as physical safety.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-4 font-semibold w-1/4 bg-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">🔍</span>
                    Grounds Inspection
                  </div>
                </td>
                <td className="border border-gray-200 px-4 py-4">School grounds and facilities are inspected regularly for potential hazards. Any issues are addressed promptly in line with ISO 9001:2015 quality management protocols.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-4 font-semibold w-1/4 bg-gray-50">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">💻</span>
                    Digital Safety
                  </div>
                </td>
                <td className="border border-gray-200 px-4 py-4">Students receive age-appropriate education on responsible and safe use of technology, both in and outside the classroom. Mobile phones are not permitted at school.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Gate Opening Hours</h3>
        <p>The main gate is locked for most of the school day. It opens only during the following windows:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>07:30 – 09:00</strong> Morning drop-off window</li>
          <li><strong>14:40 – 17:00</strong> Afternoon pick-up window</li>
        </ul>
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
          <p className="mb-2">If you arrive outside these hours, call: +387 60 345 1275 or +387 33 560 520.</p>
          <p>Do not leave your child unattended at a closed gate.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Visitor Access</h3>
        <p>All visitors to IDSS, including parents, must be authorised. The school secretary monitors the gate and verifies the identity of anyone entering the school grounds. Staff may request a photo ID from any person not previously known to them. Unauthorised individuals will not be permitted entry.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Ambulance Intervention</h3>
        <p>In the event of a serious injury or medical emergency involving a student, staff will immediately call emergency services (124). Parents are notified as soon as the call has been made. IDSS staff are not authorised to determine which hospital the student is taken to, that decision rests solely with the emergency physician.</p>
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
          <p className="mb-2">In a medical emergency: staff call 124 first, then inform parents immediately.</p>
          <p>IDSS staff cannot override decisions made by the emergency physician.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Student Wellbeing & Mental Health</h3>
        <p>Physical safety is inseparable from emotional safety. IDSS provides counselling and wellbeing support for students experiencing stress, anxiety, or personal difficulties. Our staff are trained to recognise early signs of emotional difficulty and to respond with care and discretion. Parents are encouraged to inform the school of any significant changes in a child's home situation that may affect their wellbeing at school.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Digital Safety</h3>
        <p>Students are educated in responsible, ethical, and safe use of technology as part of their regular curriculum. Mobile phones are not permitted on school premises. Any concerns related to cyberbullying, inappropriate online content, or digital harassment should be reported immediately to the class teacher or Head of Education.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Parent Responsibilities</h3>
        <p>School safety depends on active cooperation from families. Parents are required to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Respect all gate access procedures and never attempt to enter outside authorised hours without calling first.</li>
          <li>Keep the school's authorised escort list up to date at all times (see Drop-off & Pick-up section).</li>
          <li>Inform the school immediately of any medical condition, allergy, or personal circumstance that may affect their child's safety.</li>
          <li>Never share access codes, gate procedures, or internal school information with unauthorised persons.</li>
          <li>Report any safety concern, however minor it may seem, to school staff promptly.</li>
        </ul>
      </div>
    )
  }
];
