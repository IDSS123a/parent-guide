import React from 'react';
import { GuideSection } from './types';

export const guideContent3: GuideSection[] = [
  {
    id: "drop-off-pick-up",
    title: "PROCEDURES FOR DROP-OFF AND PICK-UP",
    content: (
      <div className="space-y-6">
        <p>The following procedures are based on the IDSS Procedure on Student Departure After Regular Classes, the Rulebook on School House Rules, and applicable BiH education law. Their purpose is to ensure the maximum safety of every student and the smooth, orderly flow of traffic in the school yard. All staff and all families are required to follow these procedures consistently.</p>
        
        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Main Gate Opening Hours</h3>
        <p className="mb-4">The main gate is locked for most of the school day. It opens only during authorised drop-off and pick-up windows. The janitor manages parking access during the afternoon.</p>
        
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Time</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Gate Status</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">07:30 – 09:00</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-green-600">OPEN</td>
                <td className="border border-gray-200 px-4 py-2">Morning drop-off</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">09:00 – 14:30</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-red-600">LOCKED</td>
                <td className="border border-gray-200 px-4 py-2">No entry/exit</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">14:30</td>
                <td className="border border-gray-200 px-4 py-2">Parking gate opens</td>
                <td className="border border-gray-200 px-4 py-2">Max. 2 vehicles at a time (janitor)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">14:40 – 17:00</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-green-600">OPEN</td>
                <td className="border border-gray-200 px-4 py-2">Afternoon pick-up</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">14:55</td>
                <td className="border border-gray-200 px-4 py-2">Parking gate closes</td>
                <td className="border border-gray-200 px-4 py-2">After pick-up is complete</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">17:00</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-red-600">LOCKED</td>
                <td className="border border-gray-200 px-4 py-2">School closes</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 space-y-4">
          <p>If you arrive outside gate hours, call: +387 60 345 1275 or +387 33 560 520.</p>
          <p>Do not leave your child unattended at a closed or locked gate under any circumstances.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Morning Drop-Off Procedure</h3>
        <p className="mb-4">Drop-off window: 07:30 – 09:00. The gate locks at 09:00.</p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>Parents may accompany their child to the wardrobe area at the school entrance door.</li>
          <li><strong>Parents are required to not proceed beyond the wardrobe area</strong>, no entry into hallways or upstairs. This supports student independence and keeps the school building secure.</li>
          <li>Students change immediately into their indoor shoes in the wardrobe.</li>
          <li><strong>Students must be seated and ready to learn by 07:55</strong> for the 08:00 lesson start.</li>
        </ol>
        
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-4">
          <p>INDOOR SHOES, MANDATORY:</p>
          <p>Every student must bring and wear indoor shoes inside the school building every day.</p>
          <p>Outdoor shoes are stored in the wardrobe shelves at the school entrance.</p>
          <p>This rule applies to ALL grades, ALL days.</p>
          <p>Please label your child's indoor shoes with their full name.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Afternoon Pick-Up Procedure (14:45)</h3>
        <p className="mb-4">This procedure applies to all students who are not enrolled in the Afterschool Programme. It is based on the official IDSS Procedure on Student Departure After Regular Classes.</p>
        
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-4 mb-4">
          <p>GENERAL PRINCIPLES:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All students not in the Afterschool Programme must be collected by a parent/guardian at 14:45.</li>
            <li>Students may NOT remain in the school yard unsupervised.</li>
            <li>Parents/guardians must collect their child in person, staff cannot hand over children outside this procedure.</li>
            <li>Responsibility for the child transfers to the parent/guardian at the moment of personal collection.</li>
            <li>Students with a Declaration of Independent Departure on file may leave independently at 14:40.</li>
          </ul>
        </div>
        
        <p className="mb-2">Step-by-step procedure:</p>
        <ol className="list-decimal pl-6 space-y-2 mb-4" start={5}>
          <li>At 14:40, the teacher ends the lesson and accompanies students to the school exit.</li>
          <li>Afterschool Programme students are directed immediately to the responsible educator.</li>
          <li>Parents wait in the schoolyard in front of the school door.</li>
          <li>For Grades 1 and 2: teachers accompany students to the wardrobe, where they prepare for pick-up, then join parents in the schoolyard.</li>
          <li>The parent collects the child in person. Responsibility transfers to the parent at this moment.</li>
          <li>The teacher keeps a brief record of students collected and students remaining in the Afterschool Programme.</li>
        </ol>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Afterschool Programme Pick-Up (16:30 – 17:00)</h3>
        <ol className="list-decimal pl-6 space-y-2 mb-4" start={11}>
          <li>Arrive between 16:30 and 17:00. The school closes at 17:00.</li>
          <li>Enter the school building and knock quietly on the door of the activity room.</li>
          <li>Please enter quietly, the teacher may be mid-activity with students.</li>
          <li>The parent collects the child in person. Responsibility transfers at the moment of collection.</li>
        </ol>
        
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 space-y-4">
          <p>Students not collected by 17:00: the Director is immediately informed and decides on next steps.</p>
          <p>Repeated late collection will be addressed formally with the family.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Roles and Responsibilities at Pick-Up</h3>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Who</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Responsibilities at 14:40</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Teacher</td>
                <td className="border border-gray-200 px-4 py-2">Ends class exactly at 14:40. Accompanies students to the exit. Monitors pick-up and verifies authorised escorts. Directs Afterschool Programme students immediately to the responsible educator. Keeps a brief record of students picked up vs. staying.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Secretary</td>
                <td className="border border-gray-200 px-4 py-2">Present at the school entrance throughout pick-up. Does NOT escort children to vehicles, parents are required to collect in person. If a parent is delayed, the student waits with the secretary. Logs delayed pick-up times. Notifies the Director/pedagogue if delay exceeds 15 minutes.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Janitor</td>
                <td className="border border-gray-200 px-4 py-2">Opens parking gate at 14:30. Allows max. 2 vehicles simultaneously. Monitors traffic safety in the school yard. Closes parking gate by 14:55. Reports any incidents to the secretary.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Parent / Guardian</td>
                <td className="border border-gray-200 px-4 py-2">Arrives on time at 14:45. Collects child in person from the schoolyard. Respects traffic rules in the school yard. Notifies school in advance if a different person will collect the child.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Special Situations</h3>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Situation</th>
                <th className="border border-gray-200 px-4 py-2 text-left">What happens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Parent delayed &lt; 15 min</td>
                <td className="border border-gray-200 px-4 py-2">Student waits with the school secretary. Secretary logs the time.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Parent delayed &gt; 15 min</td>
                <td className="border border-gray-200 px-4 py-2">Secretary notifies the Director and/or school pedagogue. Joint decision on further steps.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Student not picked up by 15:00</td>
                <td className="border border-gray-200 px-4 py-2">Director is contacted and decides on next course of action. Parents are called immediately.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Different person collecting</td>
                <td className="border border-gray-200 px-4 py-2">Parent must notify the school in advance, in writing or by phone. Staff will verify identity. An ID may be requested.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Emergency (child illness, accident)</td>
                <td className="border border-gray-200 px-4 py-2">Secretary immediately contacts parents. Director/pedagogue is informed. Normal pick-up procedure may be overridden.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Independent departure (Izjava)</td>
                <td className="border border-gray-200 px-4 py-2">Student may leave independently at 14:40 only if a written Declaration of Independent Departure (Izjava o samostalnom odlasku) is on file. No exceptions without this document.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 space-y-4 mb-4">
          <p>KEY RULE, Third-party collection:</p>
          <p>If anyone other than the listed parent/guardian is collecting your child,</p>
          <p>you MUST notify the school in advance, in writing or by phone.</p>
          <p>Staff will verify identity. An ID may be requested.</p>
          <p>The school will not release a child to an unannounced third party.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Authorised Escort List</h3>
        <p className="mb-4">Every student must have a current authorised escort list on file at the school. School staff will not release a student to any person not on this list. Families are responsible for keeping this information up to date at all times. Staff may request a photo ID from any person collecting a child, if that person is not known to them.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Changes to the Daily Routine</h3>
        <p className="mb-4">Any change to the standard pick-up or drop-off arrangement must be communicated to the Head of Education AND the class teacher no later than the day before. This includes:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Early or late pick-up or drop-off</li>
          <li>A person not on the authorised escort list collecting the student</li>
          <li>A student not participating in a specific school activity or field trip</li>
        </ul>
        
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 space-y-4">
          <p>For last-minute emergency changes:</p>
          <p>Call immediately: +387 60 345 1275 or +387 33 560 520</p>
          <p>Or email: pedagogy@idss.ba</p>
          <p>Do NOT rely on email alone for urgent same-day changes, always call.</p>
        </div>
      </div>
    )
  },
  {
    id: "health",
    title: "HEALTH",
    content: (
      <div className="space-y-6">
        <p>IDSS is committed to the health, safety, and wellbeing of every student. The policies in this section are based on the IDSS Rulebook on Procedures in Emergency Medical Situations (June 2025), the Protocol on Illness and Injury, and the Rulebook on School Food. All staff are trained in first aid annually by certified instructors.</p>
        
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 space-y-2 mb-4">
          <p className="font-bold">MEDICAL EMERGENCY, call immediately:</p>
          <p>Ambulance (Hitna pomoć): 124</p>
          <p>IDSS Emergency Line: +387 60 345 1275</p>
          <p>IDSS General: +387 33 560 520</p>
          <p>School address: ul. Buka 13, 71 000 Sarajevo</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Health Records, Required on Enrolment</h3>
        <p className="mb-2">Every student must have a current health record on file before their first day at IDSS. The record must include:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Basic health information</li>
          <li>Known allergies and chronic conditions</li>
          <li>Emergency contact details for parents/guardians</li>
          <li>Contact details for the child's paediatrician</li>
          <li>Signed parental consent for emergency medical treatment</li>
        </ul>
        <p>Physical examinations are required for all students entering Preschool and Grade 1, and for all new students at any grade. Health records must be submitted before the first school day. Parents are responsible for updating the school immediately whenever health information changes.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Medication Policy</h3>
        <p className="mb-2">Students must not carry medication to or from school. If a student requires medication during school hours, the following rules apply:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Medication must be handed in by a parent or guardian</strong> to a member of staff, never sent in a child's bag.</li>
          <li>A signed parental authorisation letter must accompany the physician's written prescription.</li>
          <li>Staff may administer only the specific medication indicated, at the dosage and time specified by the physician.</li>
          <li><strong>Teachers are strictly prohibited</strong> from administering any medication on their own initiative, without parental consent and a physician's instruction.</li>
          <li>Emergency medications (EpiPen for anaphylaxis, inhaler for asthma) may be held by the school on behalf of a student, with written parental consent and a physician's letter.</li>
        </ul>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">When to Keep Your Child at Home</h3>
        <p className="mb-4">A sick child in school risks infecting classmates and staff, and is unable to learn effectively. Please keep your child at home when any of the following apply:</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Symptom</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Action required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Fever, currently or within last 24 hours</td>
                <td className="border border-gray-200 px-4 py-2">Keep home. Must be fever-free for 24 hours before returning.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Vomiting, within last 24 hours</td>
                <td className="border border-gray-200 px-4 py-2">Keep home.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Diarrhoea or stomach pain</td>
                <td className="border border-gray-200 px-4 py-2">Keep home until symptom-free.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Severe nasal discharge + persistent cough</td>
                <td className="border border-gray-200 px-4 py-2">Keep home.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Sore throat</td>
                <td className="border border-gray-200 px-4 py-2">Keep home.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Unidentified skin rash</td>
                <td className="border border-gray-200 px-4 py-2">Keep home. Medical assessment recommended.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Head lice / nits suspected or confirmed</td>
                <td className="border border-gray-200 px-4 py-2">Do not bring to school. Call school immediately.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-4 mb-4">
          <p>Returning to school after illness:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fever: child must be fever-free for a full 24 hours before returning, without fever-reducing medication.</li>
            <li>Vomiting: child must not have vomited for 24 hours before returning.</li>
            <li>All absences due to illness must be reported to the school on the day (see Attendance section).</li>
            <li>A medical note is required for repeated illness absences.</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Head Lice</h3>
        <p>If head lice or nits are suspected or confirmed, do not bring your child to school and call the school immediately. IDSS will check all students and staff. A student found to have head lice will be sent home and may return only once parents confirm in writing that treatment has been completed and the child is clear.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Allergies</h3>
        <p className="mb-2">All allergies must be reported to the school before the child's first day and updated promptly as new allergies develop. This information is held confidentially and shared only with relevant staff on a need-to-know basis.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>The school kitchen takes all reported allergies into account when planning menus.</li>
          <li>Do not bring pets to school premises. Pets may trigger allergic reactions in students with animal allergies.</li>
          <li>IDSS may occasionally bring animals to school for educational purposes. Parents will be notified in advance.</li>
          <li><strong>Students with severe allergies</strong> (e.g. anaphylaxis risk) must have an EpiPen on file at the school, with written consent from parents and a physician's letter authorising its use.</li>
        </ul>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Excuses from Physical Education</h3>
        <p>A student unable to participate in Physical Education due to illness or injury must present a doctor's note specifying the start and end dates of the exemption. If no end date is given, a further note confirming the student is medically cleared to resume all activities must be provided on the day of return. A child who returns to school with physical restrictions must bring a doctor's note on the first day back.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Medical Emergency Procedure</h3>
        <p className="mb-4">In any medical emergency, IDSS staff follow the six-step procedure established in the Emergency Medical Response Policy (June 2025, School Board):</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-red-700 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Step</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Action</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-red-600 text-center">1</td>
                <td className="border border-gray-200 px-4 py-2 font-bold">Assess</td>
                <td className="border border-gray-200 px-4 py-2">Quickly assess severity. Identify type of injury or health problem. Determine if emergency services are needed.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-red-600 text-center">2</td>
                <td className="border border-gray-200 px-4 py-2 font-bold">Secure</td>
                <td className="border border-gray-200 px-4 py-2">Remove hazards from immediate area. Ensure other students are safe and supervised. Evacuate if necessary.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-red-600 text-center">3</td>
                <td className="border border-gray-200 px-4 py-2 font-bold">First Aid</td>
                <td className="border border-gray-200 px-4 py-2">Provide first aid appropriate to the situation. Use first aid kit. Do not move the injured person unless essential for safety.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-red-600 text-center">4</td>
                <td className="border border-gray-200 px-4 py-2 font-bold">Call 124</td>
                <td className="border border-gray-200 px-4 py-2">Call emergency services. State the situation clearly. Give address: ul. Buka 13, 71000 Sarajevo. Follow dispatcher instructions.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-red-600 text-center">5</td>
                <td className="border border-gray-200 px-4 py-2 font-bold">Notify</td>
                <td className="border border-gray-200 px-4 py-2">Inform the school Director. Contact parents/guardians. Notify relevant authorities if required (police, fire).</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-red-600 text-center">6</td>
                <td className="border border-gray-200 px-4 py-2 font-bold">Document</td>
                <td className="border border-gray-200 px-4 py-2">After stabilisation: complete the incident report form. Collect witness statements. File in student record and school archive.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 space-y-4 mb-4">
          <p>AMBULANCE PROTOCOL, IDSS policy:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Staff call 124 (ambulance) FIRST, then notify parents.</li>
            <li>IDSS staff are not authorised to decide which hospital the student is taken to. That decision rests solely with the emergency physician.</li>
            <li>Parents are informed as soon as the ambulance has been called.</li>
            <li>Every incident is documented in writing and filed in the student record.</li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Specific Emergency Situations</h3>
        <p className="mb-4">Staff are trained to respond to the following situations in accordance with the IDSS Emergency Medical Rulebook:</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Situation</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Key response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Loss of consciousness</td>
                <td className="border border-gray-200 px-4 py-2">Check breathing and pulse. Place in recovery position if breathing. Begin CPR if no breathing/pulse. Call 124.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Choking (age 1+)</td>
                <td className="border border-gray-200 px-4 py-2">Apply Heimlich manoeuvre. Continue until obstruction clears or person loses consciousness. Call 124.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Choking (under age 1)</td>
                <td className="border border-gray-200 px-4 py-2">Up to 5 back blows, then up to 5 chest compressions. Call 124.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">Epileptic seizure</td>
                <td className="border border-gray-200 px-4 py-2">Clear area. Do not put anything in mouth. Time the seizure. Recovery position after. Call 124 if &gt; 5 minutes or repeated.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Severe allergic reaction</td>
                <td className="border border-gray-200 px-4 py-2">Remove allergen. Apply EpiPen if available and authorised. Call 124. Semi-recumbent position. Prepare for CPR.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-semibold">High fever (&gt; 38°C)</td>
                <td className="border border-gray-200 px-4 py-2">Remove excess clothing. Cool environment. Offer fluids. Cool compress. Antipyretic only with parental consent. Call 124 if &gt; 39°C.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-semibold">Serious injury / bleeding</td>
                <td className="border border-gray-200 px-4 py-2">Apply direct pressure to stop bleeding. Immobilise. Do not remove foreign bodies from wound. Cover with sterile gauze. Monitor vitals. Call 124.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">First Aid Equipment</h3>
        <p>IDSS maintains fully stocked first aid kits in accessible, clearly marked locations throughout the school. Contents are checked regularly and restocked as needed. At least one staff member trained in first aid is present on school premises at all times. The kit contains: sterile gauze and bandages, plasters, antiseptic, thermometer, disposable gloves, scissors, tweezers, and a list of emergency contact numbers.</p>
      </div>
    )
  },
  {
    id: "food-nutrition",
    title: "FOOD & NUTRITION",
    content: (
      <div className="space-y-6">
        <p>IDSS operates its own fully-equipped kitchen. All food preparation complies strictly with HACCP (Hazard Analysis and Critical Control Points) food safety standards. Weekly menus are planned in collaboration with a qualified nutritionist to ensure balanced, age-appropriate, and nutritious meals for every student, every day.</p>
        
        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Meals Included, At a Glance</h3>
        <p className="mb-4">What is provided depends on the group your child belongs to and whether they are enrolled in the Afterschool Programme. The table below gives a precise overview:</p>
        
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Meal / Time</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Preschool Group</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Grades 1–9 (standard day)</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Grades 1–9 (Afterschool Programme)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold">Breakfast 08:45 – 09:05</td>
                <td className="border border-gray-200 px-4 py-2 text-green-600">✓ Included in tuition</td>
                <td className="border border-gray-200 px-4 py-2"><span className="text-red-600">− Not in tuition.</span> Available on request: 50,00 KM/month. Or bring from home.</td>
                <td className="border border-gray-200 px-4 py-2"><span className="text-red-600">− Not in tuition.</span> Available on request: 50,00 KM/month. Or bring from home.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold">Hot Lunch 11:30 – 12:15</td>
                <td className="border border-gray-200 px-4 py-2 text-green-600">✓ Included in tuition</td>
                <td className="border border-gray-200 px-4 py-2 text-green-600">✓ Included in tuition</td>
                <td className="border border-gray-200 px-4 py-2 text-green-600">✓ Included in tuition</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold">Afternoon Snack 14:40 – 15:15</td>
                <td className="border border-gray-200 px-4 py-2 text-green-600">✓ Included in tuition</td>
                <td className="border border-gray-200 px-4 py-2"><span className="text-red-600">− Not provided.</span> (Standard day ends at 14:45.)</td>
                <td className="border border-gray-200 px-4 py-2 text-green-600">✓ Included in Afterschool fee</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-4 mb-4">
          <p>PRESCHOOL GROUP, Full board included in tuition:</p>
          <p>Breakfast (08:45 – 09:05) ✓ Included</p>
          <p>Hot Lunch (11:30 – 12:15) ✓ Included</p>
          <p>Afternoon Snack (14:40 – 15:15) ✓ Included</p>
          <p>No additional food charges apply for Preschool students.</p>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 space-y-4 mb-4">
          <p>GRADES 1–9, Standard tuition covers:</p>
          <p>Hot Lunch (11:30 – 12:15) ✓ Included in tuition</p>
          <p className="mt-4">Breakfast ✗ NOT included in tuition.</p>
          <p>→ Parents may register for school breakfast: 50,00 KM/month (billed separately).</p>
          <p>→ Alternatively, students may bring their own breakfast from home.</p>
          <p className="mt-4">Afternoon Snack ✗ NOT included in standard tuition.</p>
          <p>→ Provided only for students enrolled in the Afterschool Programme (included in that fee).</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">General Food Rules</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Students may not share food with classmates.</li>
          <li>Sweets, chewing gum, and sugary snacks are not permitted at school.</li>
          <li>Please pack sufficient nutritious food when your child brings breakfast from home.</li>
          <li>Allergen information: inform the school of all food allergies before the first day of school. The kitchen will be notified. See the Health section for details.</li>
        </ul>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Birthdays</h3>
        <p className="mb-2">Every student's birthday is acknowledged with a class song and a small celebration. For a birthday cake, two options are available:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>School kitchen:</strong> Order in advance by contacting Nermin. Cost: 50,00 KM. The kitchen will prepare the cake to HACCP standards.</li>
          <li><strong>External bakery:</strong> Parents may bring a cake from a bakery. The cake's hygiene/origin certificate must be presented to the school upon delivery.</li>
        </ul>
        <p>If you are organising a birthday party outside school, please invite inclusive groups (the whole class, all boys, or all girls) rather than a partial selection, exclusion has a strong impact on children's social wellbeing. Birthday invitations should be distributed via email or phone, not at school.</p>
      </div>
    )
  },
  {
    id: "dress-code",
    title: "DRESS CODE",
    content: (
      <div className="space-y-6">
        <p>The IDSS dress code is based on the School Code of Conduct (Art. 5q and Art. 10e–f, October 2024). Its purpose is to ensure a focused, respectful, and safe learning environment for all students. Students are expected to dress in a clean, modest, and age-appropriate manner every school day.</p>
        
        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Clothing, What Is and Is Not Permitted</h3>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr>
                <th className="bg-blue-800 text-white border border-gray-200 px-4 py-2 text-left">✓ Acceptable</th>
                <th className="bg-red-700 text-white border border-gray-200 px-4 py-2 text-left">✗ Not permitted (Policy, Čl. 10)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Clean, age-appropriate clothing</td>
                <td className="border border-gray-200 px-4 py-2 text-red-600">Ripped or torn trousers/jeans</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Comfortable, practical footwear</td>
                <td className="border border-gray-200 px-4 py-2 text-red-600">Skirts or shorts more than 5 cm above the knee</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Modest necklines and covered shoulders</td>
                <td className="border border-gray-200 px-4 py-2 text-red-600">Crop tops or tops that do not cover the stomach</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Simple, small jewellery</td>
                <td className="border border-gray-200 px-4 py-2 text-red-600">Low-cut or strapless tops</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Neat, natural hair</td>
                <td className="border border-gray-200 px-4 py-2 text-red-600">Transparent / see-through clothing</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Clean, unvarnished nails</td>
                <td className="border border-gray-200 px-4 py-2 text-red-600">Makeup, artificial nails, varnished nails</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2"></td>
                <td className="border border-gray-200 px-4 py-2 text-red-600">Piercings (visible)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2"></td>
                <td className="border border-gray-200 px-4 py-2 text-red-600">Dyed hair</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2"></td>
                <td className="border border-gray-200 px-4 py-2 text-red-600">Expensive or bulky jewellery / valuables</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2"></td>
                <td className="border border-gray-200 px-4 py-2 text-red-600">Display of religious symbols</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 space-y-4 mb-4">
          <p>Dress code applies every school day, to all students in all grades.</p>
          <p>Staff may address inappropriate clothing at any time.</p>
          <p>Repeated violations are treated as a breach of school rules and parents will be informed.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Shoes, Two Pairs Required Every Day</h3>
        <p className="mb-4">Every student must bring TWO pairs of shoes to school every day. This is a mandatory requirement based on the School Code of Conduct and applies to ALL grades, ALL days, without exception.</p>
        
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-4 mb-4">
          <p>INDOOR SHOES, MANDATORY:</p>
          <p>Every student must wear indoor shoes inside the school building at all times.</p>
          <p>Outdoor shoes are stored in the wardrobe shelves at the school entrance.</p>
          <p>Indoor shoes must be: comfortable, anti-slip, and easy to put on and take off independently.</p>
          <p>Flip-flops are NOT suitable as indoor shoes.</p>
          <p>Please label your child's indoor shoes clearly with their full name.</p>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 space-y-4 mb-4">
          <p>OUTDOOR / SPORTS SHOES:</p>
          <p>Students must wear weatherproof outdoor shoes to and from school, we go outside every day.</p>
          <p>Trainers / sneakers are required for Physical Education lessons (FIS Sports Centre).</p>
          <p>PE trainers must be suitable for both indoor court and outdoor surfaces.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Jewellery & Accessories</h3>
        <p className="mb-2">Small, simple jewellery is acceptable. Please avoid jewellery that is:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Loud or jangling, it disrupts lessons</li>
          <li>Easily broken, safety risk during physical activity</li>
          <li>Bulky, interferes with writing or handling equipment</li>
          <li>Expensive or high-value, IDSS does not accept responsibility for loss or theft of valuables</li>
        </ul>
        <p>Piercings, visible religious symbols, and excessively expensive accessories are not permitted under the Policy (Art. 5q).</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Mobile Phones & Electronic Devices</h3>
        <p className="mb-4">The use of mobile phones and other audio/video recording devices during school hours is strictly prohibited under the School Code of Conduct (Art. 5s–t). The procedure is as follows:</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Step</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Mobile phone procedure (Policy, Čl. 5t)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold">On arrival</td>
                <td className="border border-gray-200 px-4 py-2">Student hands in mobile phone(s) and any audio/video recording device at the school secretary's or pedagogue's office.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold">During school</td>
                <td className="border border-gray-200 px-4 py-2">Devices are stored in designated, supervised lockers. Any use during lessons is strictly prohibited.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold">On departure</td>
                <td className="border border-gray-200 px-4 py-2">Student collects device(s) from the same office when leaving school.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold">Multiple devices</td>
                <td className="border border-gray-200 px-4 py-2">Bringing more than one device is not permitted. If brought, all devices must be handed in.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold">Responsibility</td>
                <td className="border border-gray-200 px-4 py-2">IDSS does not accept responsibility for theft, loss, or damage to devices.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 space-y-4">
          <p>A teacher may confiscate a device used during a lesson and hand it to the Director or school pedagogue. The student may collect it from the Director/pedagogue after classes.</p>
          <p>The class teacher will inform the parent/guardian of the violation.</p>
        </div>
      </div>
    )
  },
  {
    id: "items-to-bring",
    title: "ITEMS TO BRING & NOT TO BRING",
    content: (
      <div className="space-y-6">
        <p className="mb-4">The following lists are based on the School Code of Conduct and the Policy on the Use of School Premises and Equipment. Families are responsible for ensuring their child has the required items every day.</p>
        
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">✓ Required, bring every day</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold">Backpack</td>
                <td className="border border-gray-200 px-4 py-2">Large enough for a standard folder and lunch box; small enough for the child to carry independently.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold">Indoor shoes</td>
                <td className="border border-gray-200 px-4 py-2">Worn inside the building. Anti-slip, comfortable. Labelled with child's name.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold">Outdoor / weatherproof shoes</td>
                <td className="border border-gray-200 px-4 py-2">Worn to/from school and outside. Changed at the wardrobe on arrival.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold">Water bottle</td>
                <td className="border border-gray-200 px-4 py-2">Taken home, cleaned, and refilled each day.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold">PE trainers</td>
                <td className="border border-gray-200 px-4 py-2">Required on PE days. Indoor/outdoor suitable. Keep in school bag on PE days.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold">Changing clothes (Preschool only)</td>
                <td className="border border-gray-200 px-4 py-2">Labelled bag: socks, underwear, trousers, T-shirt, long-sleeved shirt.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">✗ Do NOT bring</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold">Toys and collectable cards</td>
                <td className="border border-gray-200 px-4 py-2">Cause disputes; IDSS not responsible for loss.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold">Chewing gum</td>
                <td className="border border-gray-200 px-4 py-2">Prohibited under Policy (Art. 5m).</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold">Sweets and excessive sugary snacks</td>
                <td className="border border-gray-200 px-4 py-2">Not permitted; disrupts healthy eating culture.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold">Mobile phones (see above)</td>
                <td className="border border-gray-200 px-4 py-2">Must be handed in at entry. Strictly regulated.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold">Comic books</td>
                <td className="border border-gray-200 px-4 py-2">Not relevant to the learning environment.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold">Valuables (expensive jewellery, cash, electronics)</td>
                <td className="border border-gray-200 px-4 py-2">IDSS does not accept responsibility for theft or loss.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold">Weapons, flammables, dangerous objects</td>
                <td className="border border-gray-200 px-4 py-2">Strictly prohibited by law and school rules.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold">Alcohol, narcotics</td>
                <td className="border border-gray-200 px-4 py-2">Strictly prohibited by law and school rules.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 space-y-4 mb-4">
          <p>IDSS does not accept responsibility for theft or loss of items not permitted in school,</p>
          <p>or for loss of personal valuables brought to school at the family's own risk.</p>
          <p>(School Code of Conduct, Art. 5 and Art. 10)</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Lost & Found</h3>
        <p className="mb-2">Found items are collected and placed in the Lost & Found box located on the ground floor next to the staircase. The box is cleared on the last day of each month, unclaimed items are donated or disposed of.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Please label ALL personal items: outdoor clothing, shoes, backpacks, lunch boxes, and water bottles with your child's full name.</li>
          <li>IDSS is not responsible for unlabelled items that cannot be returned to their owner.</li>
        </ul>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">No Toys Policy</h3>
        <p>Please refrain from bringing toys and collectable cards to school. Students become easily upset about losing, trading, sharing, and storing toys, these items are best kept at home. IDSS is not responsible for lost items brought from home without the teacher's prior approval.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Use of School Premises & Equipment</h3>
        <p className="mb-2">All students and families are expected to treat school property with care and respect. This is grounded in the Policy on the Use of School Premises and Equipment (October 2024):</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use school equipment carefully and only for its intended purpose.</li>
          <li>Report any damage or malfunction immediately to the teacher, secretary, or janitor.</li>
          <li>Students are responsible for returning teaching aids and school supplies to their designated place after each lesson.</li>
          <li>Any damage caused by negligent or improper use must be compensated by the responsible party.</li>
          <li>Students must not write on walls, desks, or school inventory.</li>
        </ul>
      </div>
    )
  }
];
