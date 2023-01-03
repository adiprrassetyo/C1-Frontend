import React from 'react'
import { Header, Footer } from '../components'
import { Container, Accordion } from 'react-bootstrap'
import '../assets/styles/termService.css'

const TermofService = () => {
    return (
        <>
            <Header />
            <section className='term-service-section'>
                <Container>
                    <h2 className='term-service-title'>Syarat & Kondisi</h2>
                    <div className='accordion-term'>
                        <Accordion defaultActiveKey='0'>
                            <Accordion.Item eventKey='0'>
                                <Accordion.Header>Pengertian</Accordion.Header>
                                <Accordion.Body>
                                    Syarat & Ketentuan kami akan diperbarui dan
                                    diubah dari waktu ke waktu. Untuk itu, anda
                                    harus melihat syarat dan ketentuan kami
                                    sebelum menggunakan layanan kami. Karenanya,
                                    ketika anda menggunakan layanan kami, itu
                                    berarti anda telah memahami, menyetujui, dan
                                    mengikuti Syarat dan Ketentuan kami.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='1'>
                                <Accordion.Header>
                                    Tentang Layanan Kami
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className='pengertian'>
                                        <h4>Pengertian</h4>
                                        <ol>
                                            <li>
                                                <h4>Umum</h4>
                                                <p>
                                                    Berikut adalah berbagai
                                                    istilah yang memiliki makna
                                                    sebagai berikut:
                                                </p>
                                                <ul>
                                                    <li>
                                                        {' '}
                                                        <p>
                                                            BinAir, Kami", "Kami
                                                            sendiri" adalah
                                                            perusahaan BinAir.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        {' '}
                                                        <p>
                                                            "Tiket" berarti
                                                            jadwal oleh kami
                                                            yang termasuk
                                                            kondisi dari
                                                            kontrak, detail
                                                            pemesanan, dan
                                                            pemberitahuan yang
                                                            terkandung di
                                                            dalamnya.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        {' '}
                                                        <p>
                                                            "Website" berarti
                                                            situs internet dari
                                                            BinAir yang kami
                                                            sediakan untuk
                                                            penumpang yang
                                                            melakukan booking
                                                            secara online maupun
                                                            mengakses informasi
                                                            tentang kami.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <h4>Penerbangan</h4>
                                                <ul>
                                                    <li>
                                                        {' '}
                                                        <p>
                                                            "Bagasi" berarti
                                                            barang milik pribadi
                                                            yang dibawa
                                                            sehubungan dengan
                                                            perjalanan anda
                                                            termasuk yang
                                                            didaftarkan dan
                                                            tidak didaftarkan.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        {' '}
                                                        <p>
                                                            "Langsung" artinya
                                                            penerbangan tanpa
                                                            adanya pemberhentian
                                                            dengan menggunakan
                                                            satu maskapai dan
                                                            diberikan satu kode
                                                            booking (PNR) saja.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        {' '}
                                                        <p>
                                                            "Transit" artinya
                                                            penerbangan dengan
                                                            adanya
                                                            pemberhentian,
                                                            menggunakan beberapa
                                                            maskapai berbeda dan
                                                            diberikan satu kode
                                                            booking (PNR) saja.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            "One-stop" artinya
                                                            penerbangan dengan
                                                            adanya
                                                            pemberhentian,
                                                            menggunakan beberapa
                                                            maskapai berbeda dan
                                                            diberikan 2 kode
                                                            booking (PNR)
                                                            berbeda.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            "Penumpang", "Anda",
                                                            "Milik Anda", "Anda
                                                            sendiri" berarti
                                                            siapapun, yang
                                                            diterbangkan atau
                                                            akan diterbangkan
                                                            oleh pesawat.
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            "Syarat & Ketentuan"
                                                            berarti seluruh
                                                            pengaturan dan
                                                            aturan dari
                                                            perusahaan BinAir
                                                            untuk siapa saja
                                                            yang menggunakan
                                                            layanan BinAir.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='2'>
                                <Accordion.Header>
                                    Pemberlakuan
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ol>
                                        <li>
                                            <h4>Informasi Umum</h4>
                                            <p>
                                                Syarat & Ketentuan yang berlaku
                                                untuk pemesanan penerbangan,
                                                yang berarti merupakan tanggung
                                                jawab kami terkait dengan
                                                penerbangan termasuk bagasi dan
                                                transportasi udara (pesawat).
                                            </p>
                                        </li>
                                        <li>
                                            <h4>Bahasa</h4>
                                            <p>
                                                Bahasa pada Syarat & Ketentuan
                                                ini adalah dalam bahasa
                                                Indonesia. Meskipun ada
                                                terjemahan dalam bahasa lain
                                                untuk Syarat & Ketentuan ini,
                                                bahasa Indonesia akan menjadi
                                                satu-satunya bahasa yang
                                                digunakan dalam interpretasi
                                                Syarat & Ketentuan ini.
                                            </p>
                                        </li>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='3'>
                                <Accordion.Header>
                                    E-Ticket / Jadwal / Kode Pemesanan
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ol>
                                        <li>
                                            <h4>Bukti Kontrak</h4>
                                            <p>
                                                Syarat & Ketentuan ini dan
                                                Ketentuan Kontrak kami (termasuk
                                                harga yang berlaku) semuanya
                                                merupakan syarat dan ketentuan
                                                kontrak pengangkutan dan
                                                properti antara Anda dan kami.
                                            </p>
                                        </li>
                                        <li>
                                            <h4>Pemindahtanganan</h4>
                                            <p>
                                                Kontrak pengangkutan dan
                                                properti hanya dapat
                                                dipindahtanganan sebagaimana
                                                disebutkan dalam Syarat &
                                                Ketentuan ini dan Ketentuan
                                                Kontrak kami.
                                            </p>
                                        </li>
                                        <li>
                                            <h4>Validitas</h4>
                                            <p>
                                                Rencana perjalanan bersama
                                                dengan kode pemesanan hanya
                                                berlaku untuk Nama Penumpang
                                                atau Tamu dalam daftar penumpang
                                                dan penerbangan atau properti
                                                yang disebutkan di dalamnya.
                                            </p>
                                        </li>
                                        <li>
                                            <h4>Identitas</h4>
                                            <p>
                                                BinAir akan menyediakan kode
                                                pemesanan dan penerbangan atau
                                                properti hanya kepada Penumpang
                                                atau Nama Tamu di dalam jadwal
                                                perjalanan. Namun, identifikasi
                                                yang tepat saat melakukan
                                                check-in masih diperlukan.
                                            </p>
                                        </li>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='4'>
                                <Accordion.Header>Tarif</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Tarif berlaku hanya untuk layanan
                                        penerbangan (total biaya untuk
                                        keberangkatan hingga kedatangan dalam
                                        perjalanan penerbangan). Tarif tidak
                                        termasuk layanan transportasi darat
                                        kecuali dinyatakan lain oleh kami.
                                        BinAir tidak bertanggung jawab kepada
                                        Anda untuk penerbangan terkait apa pun
                                        atau bertanggung jawab kepada Anda atas
                                        kegagalan Anda memenuhi penerbangan
                                        lanjutan. Jika Anda telah membeli
                                        pemesanan penerbangan One-stop dari
                                        situs web kami, hanya istilah relevan
                                        yang menyesuaikan One-stop dalam Syarat
                                        dan Ketentuan ini yang akan berlaku.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='5'>
                                <Accordion.Header>
                                    Pajak Pemerintah, Biaya dan Biaya Tambahan
                                    Lainnya
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Biaya penerbangan termasuk pajak, biaya
                                        dan biaya tambahan lainnya dikenakan
                                        oleh otoritas pemerintah. Biaya tersebut
                                        merupakan bagian dari biaya transportasi
                                        udara yang mana tercantum pada biaya
                                        saat pemesanan atau pada tiket anda.
                                        Anda juga diharuskan untuk membayar
                                        pajak, biaya, dan biaya lainnya yang
                                        belum tercantum. Contoh: ada kemungkinan
                                        biaya pajak penerbangan pergi tidak
                                        termasuk dalam tiket anda. Pada beberapa
                                        kasus, pajak penerbangan pergi harus
                                        dibayarkan oleh anda kepada pemerintah
                                        negara tempat keberangkatan dan oleh
                                        karena itu tiket menjadi tidak bisa
                                        direfund oleh pihak maskapai.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='6'>
                                <Accordion.Header>Dokumen</Accordion.Header>
                                <Accordion.Body>
                                    <ol>
                                        <li>
                                            Konfirmasi pemesanan Anda, e-tiket,
                                            dan dokumentasi perjalanan lainnya
                                            (termasuk kartu identitas, paspor,
                                            dan visa terkait) harus dibawa pada
                                            hari keberangkatan. Dokumen-dokumen
                                            ini akan diperlukan di konter
                                            check-in. BinAir tidak akan
                                            bertanggung jawab jika pemasok tidak
                                            memberi Anda produk atau layanan
                                            yang dipesan jika Anda tidak
                                            memiliki dokumentasi tersebut. Anda
                                            bertanggung jawab untuk memperoleh
                                            dan memiliki seluruh dokumen yang
                                            tersedia untuk tujuan presentasi
                                            seperti yang dipersyaratkan oleh
                                            otoritas terkait semua masuk dan
                                            keluar, kesehatan, dokumen yang
                                            disyaratkan oleh hukum, peraturan,
                                            ketertiban, tuntutan atau
                                            persyaratan negara yang diterbangi
                                            dari, ke atau lebih.
                                        </li>
                                        <li>
                                            BinAir mungkin akan meminta
                                            informasi pribadi Anda untuk
                                            memproses perubahan dalam booking
                                            yang diminta, seperti merubah jadwal
                                            atau memperbaiki data travaler. Anda
                                            berkewajiban untuk menyediakan kami
                                            informasi identitas traveler karena
                                            hal ini merupakan bagian dari
                                            prosedur melakukan perubahan dalam
                                            booking.
                                        </li>
                                    </ol>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='7'>
                                <Accordion.Header>
                                    Pengecualian
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Dengan menggunakan layanan kami, Anda
                                        dengan ini mengakui dan menyetujui
                                        bahwa:
                                    </p>
                                    <ul>
                                        <li>
                                            BinAir tidak menjamin bahwa layanan
                                            yang diberikan bebas dari kesalahan,
                                            virus, atau kegagalan. Jika ada
                                            kesalahan atau kegagalan, akan
                                            segera diperbaiki.
                                        </li>
                                        <li>
                                            BinAir tidak bertanggung jawab jika
                                            ada ketidakakuratan dari produk yang
                                            diberikan.
                                        </li>
                                        <li>
                                            Jika sesuatu yang Anda peroleh atau
                                            unduh melalui situs ini menyebabkan
                                            perangkat Anda rusak, itu akan
                                            menjadi tanggung jawab Anda.
                                        </li>
                                        <li>
                                            BinAir tidak bertanggung jawab jika
                                            Anda mengalami kerugian atau
                                            kerusakan karena tidak adanya
                                            dokumen atau izin.
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='8'>
                                <Accordion.Header>
                                    Pembatasan Penggunaan
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        Saat Anda mengakses dan menggunakan
                                        layanan kami, Anda harus setuju bahwa
                                        Anda tidak akan pernah menggunakan situs
                                        kami dan kontennya untuk aktivitas yang
                                        tidak sah atau ilegal. Konten dan situs
                                        tidak dapat digunakan untuk tujuan
                                        komersial. Jika Anda melakukan hal-hal
                                        yang tidak diperbolehkan di atas, BinAir
                                        berhak menuntut Anda karena pelanggaran
                                        yang Anda lakukan.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey='9'>
                                <Accordion.Header>
                                    Tentang Kami
                                </Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        BinAir adalah salah satu platform
                                        pemesanan penerbangan terkemuka di
                                        Indonesia sejak didirikan pada tahun
                                        2022. BinAir membantu Anda menyelesaikan
                                        masalah untuk mengalami perjalanan yang
                                        menakjubkan di seluruh nusantara.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default TermofService
