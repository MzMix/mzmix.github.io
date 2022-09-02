<script setup>
import ContentPanel from './ContentPanel.vue';
import CustomDivider from './CustomDivider.vue';
</script>

<template>
    <section :id='BrickAppsOverview'>

        <div class="container-fluid">

            <!-- Nagłówek -->
            <div class="row justify-content-center mb-5">
                <div class="d-flex flex-column text-center gap-0">
                    <h2>Aplikacje z serii <span class="text-purple">Klockiem w matematykę!</span></h2>
                    <CustomDivider><i class="bi bi-bricks"></i></CustomDivider>
                </div>
            </div>
            <!-- W układzie -->
            <div class="row justify-content-center mb-5">
                <div class="col-lg-10 col-sm-12 align-self-end">

                    <ContentPanel img="/wuzk-new.png" order="img-text" articleId="W-ukladzie-z-klockami">

                        <h3>W układzie z klockami</h3>

                        <p>Aplikacja <span class="text-purple">W układzie z klockami</span> to wirtualna plansza, na
                            której można
                            umieszczać kolorowe pola.</p>

                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                            consectetur
                            adipisicing elit.</p>

                        <p>
                            Aplikacja pozwala na:
                        <ul>
                            <li>Zmianę sposobu opisu pól oraz ich zawartości</li>
                            <li>Tworzenie, eksport i import własnych zestawów kolorów</li>
                            <li>Eksport do planszy do pliku .png</li>
                        </ul>
                        </p>

                        <div class="d-flex flex-lg-row flex-column gap-lg-4 gap-2 justify-content-center">

                            <a class="btn btn-outline-purple align-self-center mt-2"
                                href="/W-ukladzie-z-klockami/">Dowiedz się więcej</a>

                            <a class="btn btn-purple btn-lg align-self-center mt-2"
                                href="https://mzmix.github.io/W-ukladzie-z-klockami/">Otwórz
                                aplikację</a>

                        </div>

                    </ContentPanel>

                </div>
            </div>

            <!-- Wieżowce -->
            <div class="row justify-content-center mb-5">
                <div class="col-lg-10 col-sm-12 align-self-end">

                    <ContentPanel img="/klockoweWiezowce.png" order="text-img" articleId="Klockowe-wiezowce">

                        <h3>Klockowe wieżowce</h3>

                        <p>Aplikacja <span class="text-purple">Klockowe wieżowce</span> to wirtualna plansza, na której
                            można
                            budować wieżowce różnych wysokości.</p>

                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                            consectetur
                            adipisicing elit.</p>

                        <p>
                            Aplikacja pozwala na:
                        <ul>
                            <li>Tworzenie, eksport i import własnych zestawów kolorów</li>
                            <li>Eksport do planszy do pliku .png</li>
                        </ul>
                        </p>

                        <div class="d-flex flex-lg-row flex-column gap-lg-4 gap-2 justify-content-center">

                            <a class="btn btn-outline-purple align-self-center mt-2" href="/Klockowe-wiezowce/">Dowiedz
                                się więcej</a>

                            <a class="btn btn-purple btn-lg align-self-center mt-2"
                                href="https://mzmix.github.io/Klockowe-wiezowce/">Otwórz
                                aplikację</a>

                        </div>

                    </ContentPanel>

                </div>
            </div>

            <!-- Pociągi -->
            <div class="row justify-content-center mb-5">
                <div class="col-lg-10 col-sm-12 align-self-end">

                    <ContentPanel img="/klockowePociagi.png" order="img-text" articleId="Klockowe-pociagi">

                        <h3>Klockowe pociągi</h3>

                        <p>Aplikacja <span class="text-purple">Klockowe pociągi</span> to wirtualna plansza, na której
                            można
                            budować pociągi.</p>

                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                            consectetur
                            adipisicing elit.</p>

                        <p>
                            Aplikacja pozwala na:
                        <ul>
                            <li>Tworzenie, eksport i import własnych zestawów kolorów</li>
                            <li>Eksport do planszy do pliku .png</li>
                        </ul>
                        </p>

                        <div class="d-flex flex-lg-row flex-column gap-lg-4 gap-2 justify-content-center">

                            <a class="btn btn-outline-purple align-self-center mt-2" href="/Klockowe-pociagi/">Dowiedz
                                się więcej</a>

                            <a class="btn btn-purple btn-lg align-self-center mt-2"
                                href="https://mzmix.github.io/Klockowe-pociagi/">Otwórz
                                aplikację</a>


                        </div>

                    </ContentPanel>

                </div>
            </div>

            <!-- Archiwum -->
            <div class="row justify-content-center mb-5">
                <div class="col-lg-10 col-sm-12 align-self-end">

                    <ContentPanel img="/wersjeArchiwalne.png" order="text-img" articleId="Wersje-archiwalne">

                        <h3>Wersje archiwalne</h3>

                        <p>Wersje archiwalne aplikacji <span class="text-purple">nie są już rozwijane</span></p>

                        <p>
                            Aplikacje w archiwum:
                        <ul>
                            <li>W układzie z klockami</li>
                            <li>Klockowe wieżowce</li>
                            <li>Klockowe pociągi</li>
                        </ul>
                        </p>

                        <a class="btn btn-purple btn-lg align-self-center mt-2" href="/wersje-archiwalne">Zobacz
                            wersje archiwalne</a>

                    </ContentPanel>

                </div>
            </div>

        </div>

    </section>
</template>

<style scoped>
section {
    background: url(/shadow-bl.png) center center;
    background-size: cover;
}
</style>