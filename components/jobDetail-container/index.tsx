'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getData } from '../../app/careers/job-detail/[id]/page';
import JobDetailCard from '../jobDetail-card';

import './style.scss';

const JobDetailContainer = () => {
  const [jobsInfo, setJobsInfo] = useState<any>([]);

  const pathname = usePathname();

  const pathnameId = pathname.toString().split('/')[3];

  useEffect(() => {
    const getJobsInfo = async () => {
      const jobs = await getData(pathnameId);
      setJobsInfo(jobs.data);
    };
    getJobsInfo();
  }, [pathnameId]);

  return (
    <div className="job-detail--container">
      <div className="job-detail--container_header-section">
        <JobDetailCard
          title={jobsInfo.title}
          companyName={jobsInfo.company}
          location={jobsInfo.location}
          sector={jobsInfo.sector}
          employees={jobsInfo.employees}
        />
      </div>

      <div className="job-detail--container_main-section">
        <div className="job-detail--container_main-section--header">
          <div className="job-type">{jobsInfo.job_type}</div>
        </div>
        <div className="job-detail--container_main-section--main">
          <div className="job-detail--container_main-section--main_about">
            <h1>Tentang Perusahaan</h1>
            <p>{jobsInfo.description}</p>
          </div>
          <div className="job-detail--container_main-section--main_desc">
            <h1>Deskripsi Pekerjaan</h1>
            <p>{jobsInfo.description}</p>
          </div>
          <div className="job-detail--container_main-section--main_responsibility">
            <h1>Responsibilities</h1>
            <ul>
              <li>
                Me-review submission (tugas) siswa dalam sebuah kelas sesuai
                target yang diberikan.
              </li>
              <li>
                Bekolaborasi dengan tim Academy dalam merancang submission
                (tugas) dari sebuah kelas.
              </li>
              <li>
                Berkontribusi pada project-project yang dikerjakan oleh tim
                Reviewer.
              </li>
            </ul>
          </div>
          <div className="job-detail--container_main-section--main_requirement">
            <h1>Syarat Pelamar</h1>
            <ul>
              <li>
                Memahami penulisan kode yang baik, efisien, dan sesuai konvensi
                dari sebuah bahasa pemrograman.
              </li>
              <li>
                Mengetahui best-practice dari platform yang digunakan pada kelas
                yang akan di-review.
              </li>
              <li>Teliti dan memiliki kemampuan debugging yang baik.</li>
              <li>
                Menguasai teknologi yang digunakan pada kelas yang akan
                di-review. Dibuktikan dengan:
              </li>
              <ul className="sub-unordered-list">
                <li>Lulus dengan nilai baik pada kelas tersebut, atau</li>
                <li>
                  Telah memberi kontribusi ke dalam kelas tersebut. Misalnya,
                  memberikan masukan terhadap kelas atau aktif pada forum
                  diskusi.
                </li>
              </ul>
              <li>Berpengalaman dalam pengembangan aplikasi iOS.</li>
              <li>Memiliki kemampuan komunikasi dan kolaborasi yang baik.</li>
              <li>
                Memiliki rasa ingin tahu yang tinggi dan tidak pernah puas akan
                pengetahuan baru.
              </li>
              <li>
                Memiliki kemampuan dasar untuk riset akan menjadi nilai tambah.
              </li>
              <li>
                Terbuka dalam menerima feedback dari orang lain. Percaya diri
                dan dapat dipercaya.
              </li>
            </ul>
          </div>
          <div className="job-detail--container_main-section--main_tutorial">
            <h1>Tertarik?</h1>
            <ul>
              <li>
                Kirimkan CV dan Portofolio terbaik kamu. Mohon untuk
                mencantumkan nilainya di inputan Cover Letter.
              </li>
              <li>Ceritakan ke kami pengalaman apa saja yang kamu miliki.</li>
              <li>
                Buatlah sebuah artikel yang membahas tentang pemrograman atau
                teknologi yang sedang kamu minati.
              </li>
              <ul className="sub-unordered-list">
                <li>
                  Kamu dapat mencantumkan link ke artikel ini di inputan Cover
                  Letter ketika memasukkan lamaran untuk lowongan ini.
                </li>
              </ul>
              <li>
                Berapa harapan gaji kamu bila bergabung dengan Dicoding
                Indonesia?
              </li>
              <ul className="sub-unordered-list">
                <li>
                  Tunjukan karya-karya kamu di bidang pemrograman atau
                  pengembangan aplikasi.
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-bottom"></div>
    </div>
  );
};

export default JobDetailContainer;
