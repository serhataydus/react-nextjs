## Kurulum

npm install

```bash
npm run dev
# or
npm run storybook
# or
npm run test
```

## Test Yazımı

```typescript
import { render, fireEvent } from "@testing-library/react";
import MyButton from "./MyButton";

describe("MyButton", () => {
  it("renders correctly with label", () => {
    const label = "Click me";
    const dataTestId = "test-button";
    const { getByText } = render(
      <MyButton label={label} dataTestId={dataTestId} />
    );
    const buttonElement = getByText(label);
    expect(buttonElement).toBeInTheDocument();
  });

  it("triggers onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const label = "Click me";
    const dataTestId = "test-button";
    const { getByText } = render(
      <MyButton label={label} dataTestId={dataTestId} onClick={onClickMock} />
    );
    const buttonElement = getByText("Click me");
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalled();
  });
});
```

Bu kodlar, React bileşenlerinin test edilmesi için kullanılan Jest ve React Testing Library kütüphanelerini kullanarak MyButton bileşenini test etmektedir.

İlk olarak, render ve fireEvent fonksiyonlarını @testing-library/react modülünden içe aktarıyoruz. Bu fonksiyonlar, React bileşenlerini render etmek ve olayları tetiklemek için kullanılır.

Daha sonra, MyButton bileşenini test etmek için bir describe bloğu oluşturuyoruz. describe bloğu, testlerin bir grup halinde çalıştırılmasını sağlar ve testler arasında paylaşılan bağlamı sağlar.

İlk test, 'renders correctly with label' başlığıyla oluşturulmuştur. Bu test, MyButton bileşeninin, bir etiketle birlikte doğru şekilde render edildiğini doğrulamaktadır. render fonksiyonunu kullanarak MyButton bileşenini render ediyoruz ve ardından getByText fonksiyonunu kullanarak belirtilen etiketi içeren düğümü alıyoruz. Son olarak, expect ifadesiyle bu düğümün belge ağacında (toBeInTheDocument) olduğunu doğruluyoruz.

İkinci test, 'triggers onClick handler when clicked' başlığıyla oluşturulmuştur. Bu test, MyButton bileşeninin tıklanma olayını tetiklediğini doğrulamaktadır. İlk olarak, onClickMock adında bir sahte işlev oluşturuyoruz. Daha sonra, render fonksiyonunu kullanarak MyButton bileşenini render ediyoruz ve fireEvent.click fonksiyonunu kullanarak düğmeyi tıklıyoruz. Son olarak, expect ifadesiyle onClickMock işlevinin çağrıldığını (toHaveBeenCalled) doğruluyoruz.

Bu testler, MyButton bileşeninin doğru şekilde render edildiğini ve tıklanma olayını doğru şekilde tetiklediğini kontrol eder. Bu tür testler, React uygulamalarının davranışını doğrulamak ve potansiyel hataları bulmak için kullanılır.

```bash
npm install --save-dev jest
npm install --save-dev @testing-library/react
npm install --save-dev @testing-library/jest-dom
npm install --save-dev testing-library/jest-dom
npm install --save-dev @testing-library/react
npm install --save-dev @types/jest
npm install --save-dev @types/testing-library__react
npm install --save-dev babel-jest @babel/preset-typescript
```

jest.config.js

```typescript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
};
```

babel.config.js

```typescript
module.exports = {
  presets: ["next/babel", "@babel/preset-typescript"],
};
```
