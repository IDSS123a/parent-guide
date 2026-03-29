import React from 'react';
import { GuideSection } from './types';

export const guideContent4: GuideSection[] = [
  {
    id: "daily-structure",
    title: "DAILY STRUCTURE & SCHOOL RULES",
    content: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Wardrobe</h3>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>Put belongings away neatly, outdoor shoes in shelves, bags and coats on hooks.</li>
          <li>Change into indoor shoes immediately upon arrival.</li>
          <li>Use an inside voice.</li>
        </ol>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Arriving Time (07:30 – 07:55) & Breaks in the Classroom</h3>
        <ol className="list-decimal pl-6 space-y-2 mb-4" start={4}>
          <li>Choose an activity and find an area to settle quietly.</li>
          <li>Ask a teacher for permission before leaving the room.</li>
          <li>Put supplies away neatly.</li>
          <li>Use an inside voice.</li>
        </ol>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Lunchroom</h3>
        <ol className="list-decimal pl-6 space-y-2 mb-4" start={8}>
          <li>Tidy school materials in the classroom before heading to the lunchroom.</li>
          <li>Follow your teacher to the lunchroom.</li>
          <li>Find your seat quickly and quietly.</li>
          <li>Lunch starts together when all students are ready.</li>
          <li>Place plates in the designated area when finished.</li>
        </ol>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Schoolyard</h3>
        <ol className="list-decimal pl-6 space-y-2 mb-4" start={13}>
          <li>Follow your teacher to the wardrobe and get ready quietly.</li>
          <li>Treat equipment with respect and return it neatly.</li>
          <li>Respect everyone's personal space.</li>
          <li>Do not hide in bushes or behind structures.</li>
          <li>When the break ends, line up and follow your teacher back inside.</li>
        </ol>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Rules during Lessons</h3>
        <ol className="list-decimal pl-6 space-y-2 mb-4" start={18}>
          <li>Raise your hand when you wish to speak.</li>
          <li>Listen attentively to the speaker.</li>
          <li>Use materials with care.</li>
          <li>Use an inside voice and speak the correct language of instruction.</li>
        </ol>
      </div>
    )
  },
  {
    id: "behaviour-policies",
    title: "BEHAVIOUR POLICIES",
    content: (
      <div className="space-y-6">
        <p className="mb-4">IDSS is committed to a safe, respectful, and responsible learning environment. We maintain clear expectations and review them regularly with students to ensure everyone can do their best work.</p>
        
        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">The Six General IDSS Rules:</h3>
        <ol className="list-decimal pl-6 space-y-2 mb-4" start={22}>
          <li>Use respectful and polite language at all times.</li>
          <li>Treat everyone, peers, staff, and visitors, with respect.</li>
          <li>Listen attentively when others are speaking.</li>
          <li>Ask permission before leaving any room.</li>
          <li>Use all materials and equipment with care.</li>
          <li>Follow directions given by staff.</li>
        </ol>
        
        <p className="mb-4">When students have difficulty meeting expectations, logical consequences follow. Patterns of misconduct prompt a parent meeting. In serious cases, parents are called immediately.</p>
        <p>Discipline is always age-appropriate and case-specific. In extreme circumstances, IDSS reserves the right to suspend or, as a last resort, expel a student. We believe strongly in school-family partnership to guide every child in the right direction.</p>
      </div>
    )
  },
  {
    id: "academic-programme",
    title: "ACADEMIC PROGRAMME",
    content: (
      <div className="space-y-6">
        <p className="mb-4">IDSS delivers a dual-track curriculum aligned with the educational standards of the German federal states of Baden-Württemberg and Thüringen, harmonised with the Law on Education in Sarajevo Canton (Sl. novine KS br. 27/24). Instruction is conducted in German, English, and B/H/S across all grades. The programme covers Grades 1–9 as well as the Preschool Group.</p>
        
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-4 mb-4">
          <p>Programme languages: German (DE) • English (EN) • Bosnian/Croatian/Serbian (BSH) • French (FR, from Grade 6)</p>
          <p>Total weekly lessons per student: 35 (all grades)</p>
          <p>Each lesson: 45 minutes, with 5-minute transitions between subjects</p>
          <p>Timetable is published at least one week before the start of each school year: idss.edu.ba</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Primary School, Weekly Lessons (Grades 1–4)</h3>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm text-center">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Subject / Language</th>
                <th className="border border-gray-200 px-4 py-2">Gr 1</th>
                <th className="border border-gray-200 px-4 py-2">Gr 2</th>
                <th className="border border-gray-200 px-4 py-2">Gr 3</th>
                <th className="border border-gray-200 px-4 py-2">Gr 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">German (DE)</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Mathematics (DE)</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">English (EN)</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">BSH (BSH)</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Social Science (DE)</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">My Environment (DE)</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Physical Education (EN)</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Art (DE)</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Music (EN)</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Ethics (DE)</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Support (DE)</td>
                <td className="border border-gray-200 px-4 py-2">7</td>
                <td className="border border-gray-200 px-4 py-2">7</td>
                <td className="border border-gray-200 px-4 py-2">6</td>
                <td className="border border-gray-200 px-4 py-2">6</td>
              </tr>
              <tr className="bg-blue-100">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800 text-left">TOTAL</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">35</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">35</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">35</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">35</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm italic mb-4">Note: Grades 1 and 2 also receive a daily 15-minute German language circle. Physical Education lessons are held at the FIS Sport and Recreation Centre Sarajevo.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Middle School, Weekly Lessons (Grades 5–9)</h3>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm text-center">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Subject / Language</th>
                <th className="border border-gray-200 px-4 py-2">Gr 5</th>
                <th className="border border-gray-200 px-4 py-2">Gr 6</th>
                <th className="border border-gray-200 px-4 py-2">Gr 7</th>
                <th className="border border-gray-200 px-4 py-2">Gr 8</th>
                <th className="border border-gray-200 px-4 py-2">Gr 9</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">German (DE)</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Mathematics (EN)</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">English (EN)</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">French (FR)</td>
                <td className="border border-gray-200 px-4 py-2">–</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">BSH (BSH)</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
                <td className="border border-gray-200 px-4 py-2">4</td>
                <td className="border border-gray-200 px-4 py-2">3</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Informatics (EN)</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Nature / Biology (DE)</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Geography (EN)</td>
                <td className="border border-gray-200 px-4 py-2">–</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">History (EN)</td>
                <td className="border border-gray-200 px-4 py-2">–</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Physics (EN)</td>
                <td className="border border-gray-200 px-4 py-2">–</td>
                <td className="border border-gray-200 px-4 py-2">–</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Chemistry (EN)</td>
                <td className="border border-gray-200 px-4 py-2">–</td>
                <td className="border border-gray-200 px-4 py-2">–</td>
                <td className="border border-gray-200 px-4 py-2">–</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Physical Education (EN)</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Art (DE)</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Music (EN)</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Ethics (DE)</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Technical Education (EN)</td>
                <td className="border border-gray-200 px-4 py-2">–</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
                <td className="border border-gray-200 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-left">Support (DE)</td>
                <td className="border border-gray-200 px-4 py-2">5</td>
                <td className="border border-gray-200 px-4 py-2">3</td>
                <td className="border border-gray-200 px-4 py-2">2</td>
                <td className="border border-gray-200 px-4 py-2">–</td>
                <td className="border border-gray-200 px-4 py-2">–</td>
              </tr>
              <tr className="bg-blue-100">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800 text-left">TOTAL</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">35</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">35</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">35</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">35</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">35</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm italic mb-4">Note: Physical Education lessons are held at the FIS Sport and Recreation Centre Sarajevo. French is introduced from Grade 6.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Teaching Methods & Approach</h3>
        <p className="mb-2">IDSS employs a diverse range of evidence-based teaching methodologies to ensure effective learning and the development of all students:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Interactive and discussion-based teaching</li>
          <li>Project-based and research-based learning</li>
          <li>Collaborative group work and peer learning</li>
          <li>Individualised instruction and differentiated support</li>
          <li>Integration of digital technologies</li>
          <li>Practical experiments and hands-on activities</li>
          <li>Field trips and educational excursions</li>
        </ul>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">IDSS Preschool Group</h3>
        <p className="mb-4">The IDSS Preschool Group offers a German-language immersion programme from the earliest age, following a daily routine aligned with the International Montessori House (IMH) calendar. The curriculum develops language (German from day one), numeracy, social-emotional skills, creativity, and early independence. Children learn through play, projects, daily rituals, and outdoor exploration.</p>
        <p className="mb-4">The preschool prepares children seamlessly for transition into Grade 1 of the primary programme. Full board (breakfast, lunch, and afternoon snack) is included in the Preschool tuition fee.</p>
        
        <p className="font-bold mb-2">General Daily Routine, Preschool</p>
        <p className="font-semibold text-blue-800">Morning:</p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Children arrive and are welcomed by teachers and staff</li>
          <li>Free play and exploration time, building with blocks, drawing, or playing with toys</li>
          <li>Circle time, songs, stories, and discussions about the day's activities</li>
        </ul>
        <p className="font-semibold text-blue-800">Mid-morning:</p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Snack time, nutritious snack; practising sharing and taking turns</li>
          <li>Teacher-led activities, name writing, early numeracy and language concepts</li>
          <li>Story time, a new book or a favourite story read aloud</li>
          <li>Outdoor playtime, running, jumping, and games to develop gross motor skills</li>
        </ul>
        <p className="font-semibold text-blue-800">Lunchtime:</p>
        <ul className="list-disc pl-6 space-y-1 mb-2">
          <li>Hot lunch provided by the school kitchen (HACCP-certified, nutritionist-approved)</li>
          <li>Quiet time, rest, reading, or puzzles</li>
        </ul>
        <p className="font-semibold text-blue-800">Afternoon:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Free play and exploration, continuing chosen activities or trying new ones</li>
          <li>Teacher-led group activity, science experiment, art project, or music lesson</li>
          <li>Closing circle, children say goodbye, review the day's activities, and prepare for dismissal</li>
        </ul>
        <p className="mb-4">Throughout the day, preschool teachers monitor and assess children's progress and adjust activities to meet individual needs. They encourage positive social interactions and maintain a safe, nurturing environment for all children.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Inclusive Education, Students with Special Needs</h3>
        <p className="mb-2">IDSS is committed to inclusive education for all students, in accordance with the Policy on the Organization of Instruction for Students with Special Educational Needs (October 2024). Special educational needs are identified through a multi-disciplinary team comprising the school pedagogue, psychologist, subject teachers, and, where needed, external specialists.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Individual Educational Programmes (IEP) are developed for students who require them.</li>
          <li>Needs are identified before enrolment or at any point during schooling, at the initiative of parents, teachers, or specialists.</li>
          <li>IDSS adapts teaching methods, materials, and assessment to meet individual needs.</li>
          <li>Parents are full partners in the IEP process and are kept regularly informed of progress.</li>
        </ul>
        <p>Families who believe their child may have special educational needs are encouraged to contact the school pedagogue as early as possible.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Assessments & Examinations</h3>
        <p className="mb-4">Assessment at IDSS is continuous, varied, and designed to support learning as well as measure it. It includes formative assessment during lessons, summative exams, project work, oral and written tests, and self- and peer-evaluation.</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Grade</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Exam policy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Preschool & Grade 1</td>
                <td className="border border-gray-200 px-4 py-2">No written exams.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Grade 2</td>
                <td className="border border-gray-200 px-4 py-2">Written exams begin in Semester 2 only.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Grade 3</td>
                <td className="border border-gray-200 px-4 py-2">Homework and exams begin in October.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Grades 4–9</td>
                <td className="border border-gray-200 px-4 py-2">Written exams on a published schedule, announced in advance.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-4 mb-4">
          <p>One week before each exam: teacher emails families with exam content and preparation tips.</p>
          <p>Graded exams are returned within 1 week. Students take them home for parents to review, sign, and return to school. Unsatisfactory results trigger a parent–teacher discussion.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Homework</h3>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Grade</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Homework policy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Preschool & Grade 1</td>
                <td className="border border-gray-200 px-4 py-2">No homework.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Grade 2</td>
                <td className="border border-gray-200 px-4 py-2">Homework begins in Semester 2 only.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Grade 3</td>
                <td className="border border-gray-200 px-4 py-2">Homework begins in October.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Grades 4–9</td>
                <td className="border border-gray-200 px-4 py-2">Regular homework aligned to lessons.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-2">How families best support homework at home:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Provide a quiet, distraction-free workspace, no TV or loud music.</li>
          <li>Help establish a daily routine: same time, same place.</li>
          <li>Encourage a work ethic, even 10 focused minutes daily makes a difference.</li>
          <li>Check that homework is completed, but do not do it for the child.</li>
          <li>Read with your child or encourage independent reading: 5–10 minutes per language per day.</li>
        </ul>
        <p><strong>Non-obligatory summer homework</strong> is set at the end of the school year to help maintain learning momentum over the holidays.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Grading System</h3>
        <p className="mb-4">IDSS uses the German 6-point grading scale, aligned with the standards of Baden-Württemberg and Thüringen, and converted to the Bosnian-Herzegovinian scale for official school certificates. The minimum passing grade is 3 (befriedigend / dobar).</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">German Grade</th>
                <th className="border border-gray-200 px-4 py-2 text-left">German Label</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Bosnian Grade</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">1</td>
                <td className="border border-gray-200 px-4 py-2">sehr gut (excellent)</td>
                <td className="border border-gray-200 px-4 py-2">5, odličan</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-green-600">Excellent ✓</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">2</td>
                <td className="border border-gray-200 px-4 py-2">gut (good)</td>
                <td className="border border-gray-200 px-4 py-2">4, vrlo dobar</td>
                <td className="border border-gray-200 px-4 py-2 font-bold text-green-600">Good</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-orange-500">3</td>
                <td className="border border-gray-200 px-4 py-2">befriedigend (satisfactory)</td>
                <td className="border border-gray-200 px-4 py-2">3, dobar</td>
                <td className="border border-gray-200 px-4 py-2 font-bold">Satisfactory ✔ (pass)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-orange-500">4</td>
                <td className="border border-gray-200 px-4 py-2">ausreichend (sufficient)</td>
                <td className="border border-gray-200 px-4 py-2">2, dovoljan</td>
                <td className="border border-gray-200 px-4 py-2 font-bold">Sufficient (pass)</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-red-600">5</td>
                <td className="border border-gray-200 px-4 py-2">mangelhaft (deficient)</td>
                <td className="border border-gray-200 px-4 py-2">1, nedovoljan</td>
                <td className="border border-gray-200 px-4 py-2 text-red-600">Insufficient (fail)</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-red-600">6</td>
                <td className="border border-gray-200 px-4 py-2">ungenügend (insufficient)</td>
                <td className="border border-gray-200 px-4 py-2">1, nedovoljan</td>
                <td className="border border-gray-200 px-4 py-2 text-red-600">Insufficient (fail)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 space-y-4 mb-4">
          <p>Official school certificates (svjedodžbe) are issued at the end of each semester for all students.</p>
          <p>Students receive a Bosnian-Herzegovinian certificate with grades converted as shown above.</p>
          <p>Certificates are distributed to students on the last day of each semester.</p>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Textbooks, Materials & Digital Tools</h3>
        <p className="mb-4">IDSS carefully selects learning resources from reputable international and national publishers, including Cornelsen, Deutsche Fernschule, Schulexpert, Oxford University Press, Carson Dellosa, CLE International, Sarajevo Publishing, Schöningh, Lernwelt, and Didier. All textbooks and workbooks are provided to students; additional costs are communicated at enrolment.</p>
        <p>Digital tools, including Microsoft OneDrive, MagicSchool AI, and ChatGPT, are integrated thoughtfully and age-appropriately. All digital use is supervised. Students are educated in responsible and safe use of technology as part of the regular curriculum (see Dress Code section for mobile phone policy).</p>
      </div>
    )
  },
  {
    id: "physical-education",
    title: "PHYSICAL EDUCATION, FIS SPORT & RECREATION CENTRE",
    content: (
      <div className="space-y-6">
        <p className="mb-4">IDSS does not have its own gymnasium on-site. Physical Education lessons for all grades are conducted at the FIS Sport and Recreation Centre Sarajevo, commonly known as FIS, a professional, fully-equipped sports facility.</p>
        <p className="mb-2">Key information for parents:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Students travel to FIS as a class group, accompanied by their teacher. Transport logistics and schedules are communicated at the start of each semester.</li>
          <li>Students must bring appropriate trainers/sneakers to every PE lesson. Trainers must be suitable for both indoor courts and outdoor areas.</li>
          <li>Proper PE kit (sportswear) is required. A spare set may be kept in school.</li>
          <li>If a student cannot participate in PE due to illness or injury, a doctor's note is required (see Health section).</li>
          <li>The FIS facility maintains its own safety and hygiene regulations, which students are expected to respect.</li>
        </ul>
        <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 space-y-4">
          <p>Reminder: Students must always have their PE bag packed on PE days.</p>
          <p>Lost or forgotten equipment cannot be borrowed at FIS.</p>
          <p>IDSS is not responsible for items lost at the FIS facility.</p>
        </div>
      </div>
    )
  },
  {
    id: "extracurricular-activities",
    title: "EXTRACURRICULAR ACTIVITIES & AFTERSCHOOL PROGRAMME",
    content: (
      <div className="space-y-6">
        <p className="mb-4">At IDSS, learning does not end when the school day concludes. Our Afterschool Programme offers a dynamic, enriching extension of the day, providing students with a safe, stimulating environment for continued growth, creativity, and exploration.</p>
        <p className="mb-2">The programme features:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Foreign Language Enrichment, through acting, gardening, journalism, cooking, and other creative sections.</li>
          <li>STEM Activities, hands-on projects in science, technology, engineering, and mathematics.</li>
          <li>Music and Drama, performance, self-expression, and collaborative arts.</li>
        </ul>
        <p className="mb-4">Afterschool Programme hours: 15:15 – 17:00. Pick-up window: 16:30 – 17:00.</p>
        <p className="mb-4">For more information: https://idss.edu.ba/afternoon-program | +387 33 560 520 | info@idss.ba</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Field Trips & Project Week</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Field trips</strong> are organised throughout the year. Families are notified by email in advance with full details on destination, purpose, and preparation. An additional fee applies; the amount varies by trip.</li>
          <li><strong>Project Week</strong> (22–25 May 2027) is an interdisciplinary learning week in which students work in teams on cross-curricular tasks, developing critical thinking, research skills, and presentation abilities.</li>
          <li><strong>Summer School</strong> (2–13 August 2027) is an optional enrichment programme for ages 6–15, combining German language instruction, sports, arts, and cultural excursions around Sarajevo. Spaces are limited, early registration is advised.</li>
        </ul>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Summer School</h3>
        <p className="mb-4">The IDSS Summer School runs in the 2nd and 3rd weeks of August, welcoming children aged 6–15. The programme combines German language instruction, creative arts and crafts, sports, and cultural excursions around Sarajevo and beyond, including visits to Bascarsija, Trebevic Mountain, Tito's Bunker in Konjic, ZOO Bambi, and the Pyramid of the Sun in Visoko.</p>
        <p>Collaboration with AIESEC International and the Scouts brings additional expertise in teamwork, nature, and global perspective. All students receive a completion certificate, personal progress report, and digital portfolio. Spaces are limited, early registration is strongly recommended. Visit idss.edu.ba or call +387 33 560 520 for details.</p>
      </div>
    )
  },
  {
    id: "parent-code-of-conduct",
    title: "PARENT CODE OF CONDUCT",
    content: (
      <div className="space-y-6">
        <p className="mb-4">IDSS is a community built on trust, respect, and shared responsibility. Raising thriving children requires active cooperation between families, teachers, and the school. This code is grounded in the School Code of Conduct (Art. 17-18, October 2024) and reflects our belief that every adult in our community is a role model for our students.</p>
        
        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">What We Ask of Our Families</h3>
        <p className="mb-4">IDSS families are asked to uphold the following commitments throughout the school year:</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-blue-800 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Commitment</th>
                <th className="border border-gray-200 px-4 py-2 text-left">What it looks like in practice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Dignity & Respect</td>
                <td className="border border-gray-200 px-4 py-2">Treat all staff, students, and other parents with courtesy at all times, even in disagreement.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Active Support</td>
                <td className="border border-gray-200 px-4 py-2">Support your child's daily school life: punctuality, preparation, homework, and a positive attitude.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Engagement</td>
                <td className="border border-gray-200 px-4 py-2">Attend parent–teacher meetings and school events. Read all school communications promptly.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Rules & Deadlines</td>
                <td className="border border-gray-200 px-4 py-2">Adhere to school regulations, calendars, fee deadlines, and procedures. Model this for your child.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Cultural Openness</td>
                <td className="border border-gray-200 px-4 py-2">Respect and embrace the diversity of cultures and beliefs in our community.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Constructive Dialogue</td>
                <td className="border border-gray-200 px-4 py-2">Raise concerns through the appropriate channel. Avoid social media complaints.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Privacy</td>
                <td className="border border-gray-200 px-4 py-2">Do not discuss other children, families, or staff outside formal school settings.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2 font-bold text-blue-800">Positive Modelling</td>
                <td className="border border-gray-200 px-4 py-2">Be the example you want your child to follow, in conduct, language, and attitude.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Behaviours the School Will Not Tolerate</h3>
        <p className="mb-4">In order to protect the safety, dignity, and integrity of our students, staff, and community, IDSS will not tolerate the following from parents, guardians, or other visitors (Policy, Art. 17-18):</p>
        <div className="overflow-x-auto mb-4">
          <table className="min-w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-red-700 text-white">
                <th className="border border-gray-200 px-4 py-2 text-left">Prohibited behaviour</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Consequence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Shouting at or verbally abusing any staff member, student, or parent</td>
                <td className="border border-gray-200 px-4 py-2">Written warning. Repeated behaviour leads to termination of the education agreement.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Physically intimidating any member of the school community</td>
                <td className="border border-gray-200 px-4 py-2">Immediate removal from the premises. Police may be contacted.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Breaking school security procedures (entering without authorisation)</td>
                <td className="border border-gray-200 px-4 py-2">Immediate removal. School reserves the right to terminate the education agreement.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Defamatory, offensive comments about school, staff, or students, in person or online</td>
                <td className="border border-gray-200 px-4 py-2">Written warning. Serious concerns must go to the Principal or Founder in writing.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Abusive or threatening emails, texts, phone calls, or written communications</td>
                <td className="border border-gray-200 px-4 py-2">Written warning. Legal action may follow in serious cases.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Disruptive behaviour interfering with classrooms, offices, or school grounds</td>
                <td className="border border-gray-200 px-4 py-2">Removal from premises. Director notified immediately.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Offensive, profane, or vulgar language on school premises</td>
                <td className="border border-gray-200 px-4 py-2">Written warning. Repeated behaviour leads to termination.</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 px-4 py-2">Consuming alcohol or narcotics on school premises</td>
                <td className="border border-gray-200 px-4 py-2">Immediate removal. Termination of education agreement without notice period.</td>
              </tr>
              <tr>
                <td className="border border-gray-200 px-4 py-2">Threats of physical harm to any member of the school community</td>
                <td className="border border-gray-200 px-4 py-2">Police contacted immediately. Education agreement terminated.</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 space-y-4 mb-4">
          <p>PROCEDURE for serious violations (Policy, Art. 18):</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>IDSS issues a written warning to the parent/guardian.</li>
            <li>If behaviour continues, the Education Agreement is terminated.</li>
            <li>The parent/guardian may appeal to the School Board within 8 days of receiving the warning.</li>
            <li>The School Board's decision is final.</li>
            <li>In cases of immediate threat or harm, IDSS will contact the police without delay.</li>
          </ol>
        </div>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Online & Social Media</h3>
        <p className="mb-4">Parents and guardians are asked to refrain from posting complaints, photographs of other students, or commentary about school staff, families, or events on any public social media platform. Any serious concern must be addressed directly and in writing to the Principal or the Founder. The school will take appropriate action in response to defamatory or offensive online content.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Complaints Procedure</h3>
        <p className="mb-2">We welcome constructive feedback. If you have a concern, please follow this order:</p>
        <ol className="list-decimal pl-6 space-y-2 mb-4">
          <li>Speak directly with the class teacher or relevant staff member.</li>
          <li>If unresolved, contact the Head of Education: pedagogy@idss.ba</li>
          <li>If still unresolved, request a meeting with the Principal via email.</li>
          <li>As a final step, submit a written complaint to the School Board.</li>
        </ol>
        <p>Most concerns are resolved promptly and constructively at the first or second level. Parents are expected to follow this process in full.</p>
      </div>
    )
  },
  {
    id: "acknowledgement",
    title: "ACKNOWLEDGEMENT OF RECEIPT",
    content: (
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
          <p className="font-bold text-blue-800 text-lg">Please sign and return this page to the school office</p>
          <p className="text-blue-600">by the end of the first week of school.</p>
        </div>
        
        <p className="mb-8">I confirm that I have received, read, and understood the IDSS Parent Guide for the school year 2026/2027. I am aware that the content of this Guide may be updated during the year and that I will be informed of any changes by email. I agree to adhere to all policies, procedures, and expectations set out in this Guide.</p>
        
        <div className="space-y-8">
          <div className="border-b border-gray-300 pb-2">
            <span className="font-bold">Name of Student:</span>
          </div>
          <div className="border-b border-gray-300 pb-2">
            <span className="font-bold">Student's Class / Grade:</span>
          </div>
          <div className="border-b border-gray-300 pb-2">
            <span className="font-bold">Name of Parent / Guardian 1:</span>
          </div>
          <div className="border-b border-gray-300 pb-2">
            <span className="font-bold">Signature of Parent / Guardian 1:</span>
          </div>
          <div className="border-b border-gray-300 pb-2">
            <span className="font-bold">Name of Parent / Guardian 2:</span>
          </div>
          <div className="border-b border-gray-300 pb-2">
            <span className="font-bold">Signature of Parent / Guardian 2:</span>
          </div>
          <div className="border-b border-gray-300 pb-2">
            <span className="font-bold">Date:</span>
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-blue-800">
          <p className="font-bold">WIR SIND IDSS • idss.edu.ba • info@idss.ba • +387 33 560 520</p>
          <p className="italic">Buka 13, 71 000 Sarajevo, Bosnia and Herzegovina</p>
        </div>
      </div>
    )
  },
  {
    id: "awards-certifications",
    title: "AWARDS & CERTIFICATIONS",
    content: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">ISO 9001:2015, Quality Management Certification</h3>
        <p className="mb-4">IDSS holds ISO 9001:2015 certification, the internationally recognised standard for quality management systems. This certification affirms that our processes, from admissions and curriculum delivery to communication and facility management, consistently meet the highest quality standards and are subject to regular independent audit.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">HACCP, Food Safety Certification</h3>
        <p className="mb-4">Our kitchen operates fully in compliance with HACCP (Hazard Analysis and Critical Control Points) standards, the gold standard in food safety management. Every meal prepared in our kitchen follows strict protocols developed and overseen by a qualified nutritionist. Parents can be confident that their children receive safe, nutritious, and balanced meals every day.</p>

        <h3 className="text-xl font-bold text-blue-800 mt-6 mb-4">Business Leader of Sustainable Development 2025, "People" Category</h3>
        <p>In 2025, IDSS was proud to receive the prestigious Business Leader of Sustainable Development Award in the thematic category "People". This recognition celebrates our commitment to the wellbeing, development, and empowerment of our students, staff, and wider community. It reflects our belief that people, their potential, dignity, and growth, are at the heart of everything we do.</p>
      </div>
    )
  }
];
