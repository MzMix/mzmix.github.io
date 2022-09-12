<script setup>
import ContentPanel from '../../ContentPanel/ContentPanel.vue';
import CustomDivider from '../../ContentPanel/CustomDivider.vue';
import ButtonPrimary from '../../ContentPanel/ButtonPrimary.vue';
import RouterButtonPrimaryOutline from '../../ContentPanel/RouterButtonPrimaryOutline.vue';

</script>

<template>
    <section :id="'BrickAppsOverview'">

        <div class="container-fluid">

            <!-- Nagłówek -->
            <div class="row justify-content-center mb-5 scrollTo" :id="'Aplikacje-klocki'">
                <div class="d-flex flex-column text-center gap-0">
                    <h2>Aplikacje z serii <span class="text-purple">Klockiem w matematykę!</span></h2>
                    <CustomDivider><i class="bi bi-bricks"></i></CustomDivider>
                </div>
            </div>

            <!-- W układzie -->
            <ContentPanel img="/wuzk-new.png" order="img-text" articleId="W-ukladzie-z-klockami">

                <template #Header>W układzie z klockami</template>

                <template #Text>
                    <p>Aplikacja <span class="text-purple">W układzie z klockami</span> to wirtualna plansza na
                        odwzorowanie</p>

                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
                        consectetur
                        adipisicing elit.</p>

                    <p>
                        Dodatjowo aplikacja pozwala na:
                    <ul>
                        <li>Zmianę sposobu opisu pól oraz ich zawartości</li>
                        <li>Tworzenie, eksport i import własnych zestawów kolorów</li>
                        <li>Eksport planszy do pliku .png</li>
                    </ul>
                    </p>
                </template>

                <template #Buttons>
                    <RouterButtonPrimaryOutline link="/W-ukladzie-z-klockami" altMsg="Dowiedz się więcej">Dowiedz
                        się więcej</RouterButtonPrimaryOutline>

                    <ButtonPrimary link="https://mzmix.github.io/W-ukladzie-z-klockami/" altMsg="Otwórz aplikację">
                        Otwórz aplikację</ButtonPrimary>
                </template>

            </ContentPanel>

            <!-- Wieżowce -->
            <ContentPanel img="/klockoweWiezowce.png" order="text-img" articleId="Klockowe-wiezowce">

                <template #Header>Klockowe wieżowce</template>

                <template #Text>
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
                </template>

                <template #Buttons>
                    <RouterButtonPrimaryOutline link="/Klockowe-wiezowce" altMsg="Dowiedz się więcej">Dowiedz
                        się więcej</RouterButtonPrimaryOutline>
                    <ButtonPrimary link="https://mzmix.github.io/Klockowe-wiezowce/" altMsg="Otwórz
                                aplikację">Otwórz
                        aplikację</ButtonPrimary>
                </template>


            </ContentPanel>

            <!-- Pociągi -->
            <ContentPanel img="/klockowePociagi.png" order="img-text" articleId="Klockowe-pociagi">

                <template #Header>Klockowe pociągi</template>

                <template #Text>
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
                </template>

                <template #Buttons>
                    <RouterButtonPrimaryOutline link="/klockowe-pociagi" altMsg="Dowiedz się więcej">Dowiedz
                        się więcej</RouterButtonPrimaryOutline>
                    <ButtonPrimary link="https://mzmix.github.io/Klockowe-pociagi/" altMsg="Otwórz
                                aplikację">Otwórz
                        aplikację</ButtonPrimary>
                </template>

            </ContentPanel>

            <!-- Archiwum -->
            <ContentPanel img="/wersjeArchiwalne.png" order="text-img" articleId="Wersje-archiwalne">

                <template #Header>Wersje archiwalne</template>

                <template #Text>
                    <p>Wersje archiwalne aplikacji <span class="text-purple">nie są już rozwijane</span></p>

                    <p>
                        Aplikacje w archiwum:
                    <ul>
                        <li>W układzie z klockami</li>
                        <li>Klockowe wieżowce</li>
                        <li>Klockowe pociągi</li>
                    </ul>
                    </p>
                </template>

                <template #Buttons>
                    <RouterButtonPrimaryOutline link="/wersje-archiwalne" altMsg="Zobacz
                            wersje archiwalne">Zobacz wersje archiwalne</RouterButtonPrimaryOutline>
                </template>

            </ContentPanel>

        </div>

    </section>
</template>

<style scoped>
section {
    background: url(/shadow-bl.png) center center;
    background-size: cover;
}
</style>