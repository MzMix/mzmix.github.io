<script setup>
import ContentPanel from './ContentPanel/ContentPanel.vue';
import CustomDivider from './ContentPanel/CustomDivider.vue';
import ButtonPrimary from './ContentPanel/ButtonPrimary.vue';
import ButtonPrimaryOutline from './ContentPanel/ButtonPrimaryOutline.vue';
import PanelButtonGroup from './ContentPanel/PanelButtonGroup.vue';
import ContentPanelWrapper from './ContentPanel/ContentPanelWrapper.vue';

</script>

<template>
    <section :id='BrickAppsOverview'>

        <div class="container-fluid">

            <!-- Nagłówek -->
            <div class="row justify-content-center mb-5 scrollTo" :id="'Aplikacje-klocki'">
                <div class="d-flex flex-column text-center gap-0">
                    <h2>Aplikacje z serii <span class="text-purple">Klockiem w matematykę!</span></h2>
                    <CustomDivider><i class="bi bi-bricks"></i></CustomDivider>
                </div>
            </div>
            <!-- W układzie -->

            <ContentPanelWrapper>
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

                    <PanelButtonGroup>
                        <ButtonPrimaryOutline link="/W-ukladzie-z-klockami/" altMsg="Dowiedz się więcej">Dowiedz się
                            więcej</ButtonPrimaryOutline>

                        <ButtonPrimary link="https://mzmix.github.io/W-ukladzie-z-klockami/" altMsg="Otwórz aplikację">
                            Otwórz aplikację</ButtonPrimary>
                    </PanelButtonGroup>

                </ContentPanel>
            </ContentPanelWrapper>

            <!-- Wieżowce -->
            <ContentPanelWrapper>

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

                    <PanelButtonGroup>
                        <ButtonPrimaryOutline link="/Klockowe-wiezowce/" altMsg="Dowiedz
                                się więcej">Dowiedz
                            się więcej</ButtonPrimaryOutline>
                        <ButtonPrimary link="https://mzmix.github.io/Klockowe-wiezowce/" altMsg="Otwórz
                                aplikację">Otwórz
                            aplikację</ButtonPrimary>
                    </PanelButtonGroup>


                </ContentPanel>

            </ContentPanelWrapper>

            <!-- Pociągi -->
            <ContentPanelWrapper>

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

                    <PanelButtonGroup>
                        <ButtonPrimaryOutline link="/Klockowe-pociagi/" altMsg="Dowiedz
                                się więcej">Dowiedz
                            się więcej</ButtonPrimaryOutline>
                        <ButtonPrimary link="https://mzmix.github.io/Klockowe-pociagi/" altMsg="Otwórz
                                aplikację">Otwórz
                            aplikację</ButtonPrimary>
                    </PanelButtonGroup>

                </ContentPanel>

            </ContentPanelWrapper>

            <!-- Archiwum -->
            <ContentPanelWrapper>

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

                    <PanelButtonGroup class="mt-4">
                        <ButtonPrimaryOutline link="/wersje-archiwalne" altMsg="Zobacz
                            wersje archiwalne">Zobacz wersje archiwalne</ButtonPrimaryOutline>
                    </PanelButtonGroup>

                </ContentPanel>

            </ContentPanelWrapper>

        </div>

    </section>
</template>

<style scoped>
section {
    background: url(/shadow-bl.png) center center;
    background-size: cover;
}
</style>